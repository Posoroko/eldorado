#!/usr/bin/env node

/**
 * Directus MCP Server
 * Provides tools to query, inspect schema, and manage Directus collections
 */

import { execSync } from 'child_process'

const BASE_URL = 'https://admin.titley.biz'
const API_KEY = process.env.DIRECTUS_MCP_API_KEY || ''

let authToken = null

/**
 * Get API key (no authentication needed, it's static)
 */
function getApiKey() {
  if (!API_KEY) {
    throw new Error('DIRECTUS_MCP_API_KEY environment variable not set')
  }
  return API_KEY
}

/**
 * Make authenticated API request to Directus
 */
async function directusRequest(path, options = {}) {
  const apiKey = getApiKey()

  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Directus API error: ${response.status} ${error}`)
  }

  return response.json()
}

/**
 * List all collections
 */
async function listCollections() {
  const data = await directusRequest('/collections')
  return {
    collections: data.data.map((c) => ({
      name: c.collection,
      note: c.note || ''
    }))
  }
}

/**
 * Get collection schema and fields
 */
async function getCollectionSchema(collection) {
  const data = await directusRequest(`/collections/${collection}`)
  const fields = await directusRequest(`/fields/${collection}`)

  return {
    collection: data.data.collection,
    note: data.data.note,
    fields: fields.data.map((f) => ({
      field: f.field,
      type: f.type,
      interface: f.interface || 'text',
      required: f.required || false,
      note: f.note || ''
    }))
  }
}

/**
 * Query items from a collection
 */
async function queryCollection(collection, query = {}) {
  const params = new URLSearchParams()

  if (query.limit) params.append('limit', query.limit)
  if (query.offset) params.append('offset', query.offset)
  if (query.filter) params.append('filter', query.filter)
  if (query.sort) params.append('sort', query.sort)
  if (query.fields) params.append('fields', query.fields.join(','))

  const path = `/items/${collection}${params.toString() ? '?' + params : ''}`
  const data = await directusRequest(path)

  return {
    data: data.data || [],
    meta: data.meta || {}
  }
}

/**
 * Get single item
 */
async function getItem(collection, id, fields = null) {
  const params = fields ? `?fields=${fields.join(',')}` : ''
  const data = await directusRequest(`/items/${collection}/${id}${params}`)
  return data.data
}

/**
 * Create item
 */
async function createItem(collection, payload) {
  const data = await directusRequest(`/items/${collection}`, {
    method: 'POST',
    body: JSON.stringify(payload)
  })
  return data.data
}

/**
 * Update item
 */
async function updateItem(collection, id, payload) {
  const data = await directusRequest(`/items/${collection}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload)
  })
  return data.data
}

/**
 * Delete item
 */
async function deleteItem(collection, id) {
  await directusRequest(`/items/${collection}/${id}`, {
    method: 'DELETE'
  })
  return { success: true, id }
}

/**
 * MCP Tool definitions
 */
const tools = [
  {
    name: 'list_collections',
    description: 'List all available Directus collections',
    inputSchema: { type: 'object', properties: {} }
  },
  {
    name: 'get_collection_schema',
    description: 'Get schema and fields for a collection',
    inputSchema: {
      type: 'object',
      properties: {
        collection: { type: 'string', description: 'Collection name' }
      },
      required: ['collection']
    }
  },
  {
    name: 'query_collection',
    description: 'Query items from a collection',
    inputSchema: {
      type: 'object',
      properties: {
        collection: { type: 'string', description: 'Collection name' },
        limit: { type: 'number', description: 'Number of items to return' },
        offset: { type: 'number', description: 'Offset for pagination' },
        filter: { type: 'string', description: 'Filter JSON (Directus syntax)' },
        sort: { type: 'string', description: 'Sort fields (e.g., "date,-name")' },
        fields: { type: 'array', items: { type: 'string' }, description: 'Fields to return' }
      },
      required: ['collection']
    }
  },
  {
    name: 'get_item',
    description: 'Get a single item by ID',
    inputSchema: {
      type: 'object',
      properties: {
        collection: { type: 'string', description: 'Collection name' },
        id: { type: 'string', description: 'Item ID' },
        fields: { type: 'array', items: { type: 'string' }, description: 'Fields to return' }
      },
      required: ['collection', 'id']
    }
  },
  {
    name: 'create_item',
    description: 'Create a new item in a collection',
    inputSchema: {
      type: 'object',
      properties: {
        collection: { type: 'string', description: 'Collection name' },
        payload: { type: 'object', description: 'Item data' }
      },
      required: ['collection', 'payload']
    }
  },
  {
    name: 'update_item',
    description: 'Update an item',
    inputSchema: {
      type: 'object',
      properties: {
        collection: { type: 'string', description: 'Collection name' },
        id: { type: 'string', description: 'Item ID' },
        payload: { type: 'object', description: 'Fields to update' }
      },
      required: ['collection', 'id', 'payload']
    }
  },
  {
    name: 'delete_item',
    description: 'Delete an item',
    inputSchema: {
      type: 'object',
      properties: {
        collection: { type: 'string', description: 'Collection name' },
        id: { type: 'string', description: 'Item ID' }
      },
      required: ['collection', 'id']
    }
  }
]

/**
 * Tool handler dispatcher
 */
async function handleTool(name, input) {
  switch (name) {
    case 'list_collections':
      return await listCollections()
    case 'get_collection_schema':
      return await getCollectionSchema(input.collection)
    case 'query_collection':
      return await queryCollection(input.collection, {
        limit: input.limit,
        offset: input.offset,
        filter: input.filter,
        sort: input.sort,
        fields: input.fields
      })
    case 'get_item':
      return await getItem(input.collection, input.id, input.fields)
    case 'create_item':
      return await createItem(input.collection, input.payload)
    case 'update_item':
      return await updateItem(input.collection, input.id, input.payload)
    case 'delete_item':
      return await deleteItem(input.collection, input.id)
    default:
      throw new Error(`Unknown tool: ${name}`)
  }
}

/**
 * MCP Protocol Handler
 */
async function handleRequest(request) {
  const { jsonrpc, method, params, id } = request

  if (method === 'tools/list') {
    return {
      jsonrpc: '2.0',
      result: { tools },
      id
    }
  }

  if (method === 'tools/call') {
    try {
      const result = await handleTool(params.name, params.arguments || {})
      return {
        jsonrpc: '2.0',
        result: {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result, null, 2)
            }
          ]
        },
        id
      }
    } catch (error) {
      return {
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: error.message
        },
        id
      }
    }
  }

  return {
    jsonrpc: '2.0',
    error: { code: -32601, message: 'Method not found' },
    id
  }
}

/**
 * STDIO Transport Handler
 */
async function main() {
  const readline = await import('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.on('line', async (line) => {
    if (!line.trim()) return

    try {
      const request = JSON.parse(line)
      const response = await handleRequest(request)
      console.log(JSON.stringify(response))
    } catch (error) {
      console.error(JSON.stringify({ error: error.message }))
    }
  })

  rl.on('close', () => process.exit(0))
}

// Verify API key is set
if (!API_KEY) {
  console.error('ERROR: DIRECTUS_MCP_API_KEY environment variable not set')
  process.exit(1)
}

main().catch((error) => {
  console.error('Server error:', error)
  process.exit(1)
})
