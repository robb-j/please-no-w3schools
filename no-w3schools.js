const regex = ['w3schools.com', 'geeksforgeeks.org'].map(
  (domain) => new RegExp(`^https?://(?:www.)?${domain}`)
)

function debug(...args) {
  // uncomment for debug messages:
  // console.debug(...args)
}

// Based on https://github.com/danielgjackson/herebedragons/blob/main/dragons/element-detector.js
class ElementDetector {
  constructor(rules, handler) {
    this.rules = rules
    this.handler = handler
  }

  // --- Match selectors on initial and added nodes ---
  queryAll() {
    for (const rule of this.rules) {
      for (const node of document.querySelectorAll(rule.el)) {
        this.handler(node, rule)
      }
    }
  }

  /** @param {MutationRecord[]} mutations */
  onMutate(mutations) {
    let added = 0
    for (const m of mutations) {
      added += m.addedNodes.length
    }
    if (!added) return

    debug('mutate: additions=' + added)
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (!(node instanceof Element)) continue

        for (const rule of this.rules) {
          debug('query', rule.el, node)
          if (node.matches(rule.el)) this.handler(node, rule)

          for (const child of node.querySelectorAll('*')) {
            debug('-- query', rule.el, child)

            if (child instanceof Element) {
              if (child.matches(rule.el)) this.handler(child, rule)
            }
          }
        }
      }
    }
  }

  run() {
    this.queryAll()
    const observer = new MutationObserver((m) => this.onMutate(m))
    observer.observe(document, { subtree: true, childList: true })
    return observer
  }
}

async function main() {
  const detector = new ElementDetector([{ el: 'a' }], (node) => {
    if (node.dataset.w3schools) return
    if (regex.some((r) => r.test(node.href))) {
      node.dataset.w3schools = 'true'
    }
  })
  detector.run()
}

// This script runs after DOMContentLoaded
main()
