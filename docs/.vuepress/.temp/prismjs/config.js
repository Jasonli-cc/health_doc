import "/Users/lichaochao/health_doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/Users/lichaochao/health_doc/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/Users/lichaochao/health_doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/Users/lichaochao/health_doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/Users/lichaochao/health_doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/Users/lichaochao/health_doc/node_modules/@vuepress/highlighter-helper/lib/client/index.js"
import "/Users/lichaochao/health_doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/code-block-title.css"

export default {
  setup() {
    setupCollapsedLines()
  }
}
