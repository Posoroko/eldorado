#!/usr/bin/env node

/**
 * Test harness for Directus MCP server
 */

import { spawn } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const serverPath = path.join(__dirname, 'directus-server.js')

// Test requests
const tests = [
  {
    name: 'List Collections',
    request: { jsonrpc: '2.0', method: 'tools/list', id: 1 }
  },
  {
    name: 'List System Collections',
    request: {
      jsonrpc: '2.0',
      method: 'tools/call',
      params: { name: 'list_collections' },
      id: 2
    }
  }
]

console.log('🧪 Testing Directus MCP Server Connection...\n')

// Start server
const server = spawn('node', [serverPath], {
  env: {
    ...process.env,
    DIRECTUS_MCP_API_KEY: '0ls2Hfikl_N55CyRhedsRtHTVqHytC5l'
  }
})

let responseCount = 0
let hasError = false

server.stdout.on('data', (data) => {
  const lines = data.toString().trim().split('\n')

  for (const line of lines) {
    if (!line) continue

    try {
      const response = JSON.parse(line)
      responseCount++

      if (response.error) {
        hasError = true
        console.error('❌ Error:', response.error.message)
      } else if (response.result) {
        console.log(`✅ Response ${responseCount}:`)
        console.log(JSON.stringify(response.result, null, 2))
      }

      // Exit after all tests complete
      if (responseCount >= tests.length) {
        server.kill()
        process.exit(hasError ? 1 : 0)
      }
    } catch (error) {
      console.error('Failed to parse response:', line)
    }
  }
})

server.stderr.on('data', (data) => {
  console.error('Server error:', data.toString())
  hasError = true
})

server.on('close', (code) => {
  console.log(`\nServer closed with code ${code}`)
  process.exit(code || (hasError ? 1 : 0))
})

// Send tests with delay
setTimeout(() => {
  tests.forEach((test, index) => {
    setTimeout(() => {
      console.log(`\n📤 Sending: ${test.name}`)
      server.stdin.write(JSON.stringify(test.request) + '\n')
    }, index * 1000)
  })
}, 500)

// Timeout safety
setTimeout(() => {
  console.error('\n⏱️ Test timeout')
  server.kill()
  process.exit(1)
}, 15000)
