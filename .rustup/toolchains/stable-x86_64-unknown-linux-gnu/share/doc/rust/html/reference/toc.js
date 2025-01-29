// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded "><a href="notation.html"><strong aria-hidden="true">1.</strong> Notation</a></li><li class="chapter-item expanded "><a href="lexical-structure.html"><strong aria-hidden="true">2.</strong> Lexical structure</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="input-format.html"><strong aria-hidden="true">2.1.</strong> Input format</a></li><li class="chapter-item expanded "><a href="keywords.html"><strong aria-hidden="true">2.2.</strong> Keywords</a></li><li class="chapter-item expanded "><a href="identifiers.html"><strong aria-hidden="true">2.3.</strong> Identifiers</a></li><li class="chapter-item expanded "><a href="comments.html"><strong aria-hidden="true">2.4.</strong> Comments</a></li><li class="chapter-item expanded "><a href="whitespace.html"><strong aria-hidden="true">2.5.</strong> Whitespace</a></li><li class="chapter-item expanded "><a href="tokens.html"><strong aria-hidden="true">2.6.</strong> Tokens</a></li></ol></li><li class="chapter-item expanded "><a href="macros.html"><strong aria-hidden="true">3.</strong> Macros</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="macros-by-example.html"><strong aria-hidden="true">3.1.</strong> Macros By Example</a></li><li class="chapter-item expanded "><a href="procedural-macros.html"><strong aria-hidden="true">3.2.</strong> Procedural Macros</a></li></ol></li><li class="chapter-item expanded "><a href="crates-and-source-files.html"><strong aria-hidden="true">4.</strong> Crates and source files</a></li><li class="chapter-item expanded "><a href="conditional-compilation.html"><strong aria-hidden="true">5.</strong> Conditional compilation</a></li><li class="chapter-item expanded "><a href="items.html"><strong aria-hidden="true">6.</strong> Items</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="items/modules.html"><strong aria-hidden="true">6.1.</strong> Modules</a></li><li class="chapter-item expanded "><a href="items/extern-crates.html"><strong aria-hidden="true">6.2.</strong> Extern crates</a></li><li class="chapter-item expanded "><a href="items/use-declarations.html"><strong aria-hidden="true">6.3.</strong> Use declarations</a></li><li class="chapter-item expanded "><a href="items/functions.html"><strong aria-hidden="true">6.4.</strong> Functions</a></li><li class="chapter-item expanded "><a href="items/type-aliases.html"><strong aria-hidden="true">6.5.</strong> Type aliases</a></li><li class="chapter-item expanded "><a href="items/structs.html"><strong aria-hidden="true">6.6.</strong> Structs</a></li><li class="chapter-item expanded "><a href="items/enumerations.html"><strong aria-hidden="true">6.7.</strong> Enumerations</a></li><li class="chapter-item expanded "><a href="items/unions.html"><strong aria-hidden="true">6.8.</strong> Unions</a></li><li class="chapter-item expanded "><a href="items/constant-items.html"><strong aria-hidden="true">6.9.</strong> Constant items</a></li><li class="chapter-item expanded "><a href="items/static-items.html"><strong aria-hidden="true">6.10.</strong> Static items</a></li><li class="chapter-item expanded "><a href="items/traits.html"><strong aria-hidden="true">6.11.</strong> Traits</a></li><li class="chapter-item expanded "><a href="items/implementations.html"><strong aria-hidden="true">6.12.</strong> Implementations</a></li><li class="chapter-item expanded "><a href="items/external-blocks.html"><strong aria-hidden="true">6.13.</strong> External blocks</a></li><li class="chapter-item expanded "><a href="items/generics.html"><strong aria-hidden="true">6.14.</strong> Generic parameters</a></li><li class="chapter-item expanded "><a href="items/associated-items.html"><strong aria-hidden="true">6.15.</strong> Associated Items</a></li></ol></li><li class="chapter-item expanded "><a href="attributes.html"><strong aria-hidden="true">7.</strong> Attributes</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="attributes/testing.html"><strong aria-hidden="true">7.1.</strong> Testing</a></li><li class="chapter-item expanded "><a href="attributes/derive.html"><strong aria-hidden="true">7.2.</strong> Derive</a></li><li class="chapter-item expanded "><a href="attributes/diagnostics.html"><strong aria-hidden="true">7.3.</strong> Diagnostics</a></li><li class="chapter-item expanded "><a href="attributes/codegen.html"><strong aria-hidden="true">7.4.</strong> Code generation</a></li><li class="chapter-item expanded "><a href="attributes/limits.html"><strong aria-hidden="true">7.5.</strong> Limits</a></li><li class="chapter-item expanded "><a href="attributes/type_system.html"><strong aria-hidden="true">7.6.</strong> Type System</a></li><li class="chapter-item expanded "><a href="attributes/debugger.html"><strong aria-hidden="true">7.7.</strong> Debugger</a></li></ol></li><li class="chapter-item expanded "><a href="statements-and-expressions.html"><strong aria-hidden="true">8.</strong> Statements and expressions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="statements.html"><strong aria-hidden="true">8.1.</strong> Statements</a></li><li class="chapter-item expanded "><a href="expressions.html"><strong aria-hidden="true">8.2.</strong> Expressions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="expressions/literal-expr.html"><strong aria-hidden="true">8.2.1.</strong> Literal expressions</a></li><li class="chapter-item expanded "><a href="expressions/path-expr.html"><strong aria-hidden="true">8.2.2.</strong> Path expressions</a></li><li class="chapter-item expanded "><a href="expressions/block-expr.html"><strong aria-hidden="true">8.2.3.</strong> Block expressions</a></li><li class="chapter-item expanded "><a href="expressions/operator-expr.html"><strong aria-hidden="true">8.2.4.</strong> Operator expressions</a></li><li class="chapter-item expanded "><a href="expressions/grouped-expr.html"><strong aria-hidden="true">8.2.5.</strong> Grouped expressions</a></li><li class="chapter-item expanded "><a href="expressions/array-expr.html"><strong aria-hidden="true">8.2.6.</strong> Array and index expressions</a></li><li class="chapter-item expanded "><a href="expressions/tuple-expr.html"><strong aria-hidden="true">8.2.7.</strong> Tuple and index expressions</a></li><li class="chapter-item expanded "><a href="expressions/struct-expr.html"><strong aria-hidden="true">8.2.8.</strong> Struct expressions</a></li><li class="chapter-item expanded "><a href="expressions/call-expr.html"><strong aria-hidden="true">8.2.9.</strong> Call expressions</a></li><li class="chapter-item expanded "><a href="expressions/method-call-expr.html"><strong aria-hidden="true">8.2.10.</strong> Method call expressions</a></li><li class="chapter-item expanded "><a href="expressions/field-expr.html"><strong aria-hidden="true">8.2.11.</strong> Field access expressions</a></li><li class="chapter-item expanded "><a href="expressions/closure-expr.html"><strong aria-hidden="true">8.2.12.</strong> Closure expressions</a></li><li class="chapter-item expanded "><a href="expressions/loop-expr.html"><strong aria-hidden="true">8.2.13.</strong> Loop expressions</a></li><li class="chapter-item expanded "><a href="expressions/range-expr.html"><strong aria-hidden="true">8.2.14.</strong> Range expressions</a></li><li class="chapter-item expanded "><a href="expressions/if-expr.html"><strong aria-hidden="true">8.2.15.</strong> If and if let expressions</a></li><li class="chapter-item expanded "><a href="expressions/match-expr.html"><strong aria-hidden="true">8.2.16.</strong> Match expressions</a></li><li class="chapter-item expanded "><a href="expressions/return-expr.html"><strong aria-hidden="true">8.2.17.</strong> Return expressions</a></li><li class="chapter-item expanded "><a href="expressions/await-expr.html"><strong aria-hidden="true">8.2.18.</strong> Await expressions</a></li><li class="chapter-item expanded "><a href="expressions/underscore-expr.html"><strong aria-hidden="true">8.2.19.</strong> Underscore expressions</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="patterns.html"><strong aria-hidden="true">9.</strong> Patterns</a></li><li class="chapter-item expanded "><a href="type-system.html"><strong aria-hidden="true">10.</strong> Type system</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="types.html"><strong aria-hidden="true">10.1.</strong> Types</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="types/boolean.html"><strong aria-hidden="true">10.1.1.</strong> Boolean type</a></li><li class="chapter-item expanded "><a href="types/numeric.html"><strong aria-hidden="true">10.1.2.</strong> Numeric types</a></li><li class="chapter-item expanded "><a href="types/textual.html"><strong aria-hidden="true">10.1.3.</strong> Textual types</a></li><li class="chapter-item expanded "><a href="types/never.html"><strong aria-hidden="true">10.1.4.</strong> Never type</a></li><li class="chapter-item expanded "><a href="types/tuple.html"><strong aria-hidden="true">10.1.5.</strong> Tuple types</a></li><li class="chapter-item expanded "><a href="types/array.html"><strong aria-hidden="true">10.1.6.</strong> Array types</a></li><li class="chapter-item expanded "><a href="types/slice.html"><strong aria-hidden="true">10.1.7.</strong> Slice types</a></li><li class="chapter-item expanded "><a href="types/struct.html"><strong aria-hidden="true">10.1.8.</strong> Struct types</a></li><li class="chapter-item expanded "><a href="types/enum.html"><strong aria-hidden="true">10.1.9.</strong> Enumerated types</a></li><li class="chapter-item expanded "><a href="types/union.html"><strong aria-hidden="true">10.1.10.</strong> Union types</a></li><li class="chapter-item expanded "><a href="types/function-item.html"><strong aria-hidden="true">10.1.11.</strong> Function item types</a></li><li class="chapter-item expanded "><a href="types/closure.html"><strong aria-hidden="true">10.1.12.</strong> Closure types</a></li><li class="chapter-item expanded "><a href="types/pointer.html"><strong aria-hidden="true">10.1.13.</strong> Pointer types</a></li><li class="chapter-item expanded "><a href="types/function-pointer.html"><strong aria-hidden="true">10.1.14.</strong> Function pointer types</a></li><li class="chapter-item expanded "><a href="types/trait-object.html"><strong aria-hidden="true">10.1.15.</strong> Trait object types</a></li><li class="chapter-item expanded "><a href="types/impl-trait.html"><strong aria-hidden="true">10.1.16.</strong> Impl trait type</a></li><li class="chapter-item expanded "><a href="types/parameters.html"><strong aria-hidden="true">10.1.17.</strong> Type parameters</a></li><li class="chapter-item expanded "><a href="types/inferred.html"><strong aria-hidden="true">10.1.18.</strong> Inferred type</a></li></ol></li><li class="chapter-item expanded "><a href="dynamically-sized-types.html"><strong aria-hidden="true">10.2.</strong> Dynamically Sized Types</a></li><li class="chapter-item expanded "><a href="type-layout.html"><strong aria-hidden="true">10.3.</strong> Type layout</a></li><li class="chapter-item expanded "><a href="interior-mutability.html"><strong aria-hidden="true">10.4.</strong> Interior mutability</a></li><li class="chapter-item expanded "><a href="subtyping.html"><strong aria-hidden="true">10.5.</strong> Subtyping and Variance</a></li><li class="chapter-item expanded "><a href="trait-bounds.html"><strong aria-hidden="true">10.6.</strong> Trait and lifetime bounds</a></li><li class="chapter-item expanded "><a href="type-coercions.html"><strong aria-hidden="true">10.7.</strong> Type coercions</a></li><li class="chapter-item expanded "><a href="destructors.html"><strong aria-hidden="true">10.8.</strong> Destructors</a></li><li class="chapter-item expanded "><a href="lifetime-elision.html"><strong aria-hidden="true">10.9.</strong> Lifetime elision</a></li></ol></li><li class="chapter-item expanded "><a href="special-types-and-traits.html"><strong aria-hidden="true">11.</strong> Special types and traits</a></li><li class="chapter-item expanded "><a href="names.html"><strong aria-hidden="true">12.</strong> Names</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="names/namespaces.html"><strong aria-hidden="true">12.1.</strong> Namespaces</a></li><li class="chapter-item expanded "><a href="names/scopes.html"><strong aria-hidden="true">12.2.</strong> Scopes</a></li><li class="chapter-item expanded "><a href="names/preludes.html"><strong aria-hidden="true">12.3.</strong> Preludes</a></li><li class="chapter-item expanded "><a href="paths.html"><strong aria-hidden="true">12.4.</strong> Paths</a></li><li class="chapter-item expanded "><a href="names/name-resolution.html"><strong aria-hidden="true">12.5.</strong> Name resolution</a></li><li class="chapter-item expanded "><a href="visibility-and-privacy.html"><strong aria-hidden="true">12.6.</strong> Visibility and privacy</a></li></ol></li><li class="chapter-item expanded "><a href="memory-model.html"><strong aria-hidden="true">13.</strong> Memory model</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="memory-allocation-and-lifetime.html"><strong aria-hidden="true">13.1.</strong> Memory allocation and lifetime</a></li><li class="chapter-item expanded "><a href="variables.html"><strong aria-hidden="true">13.2.</strong> Variables</a></li></ol></li><li class="chapter-item expanded "><a href="linkage.html"><strong aria-hidden="true">14.</strong> Linkage</a></li><li class="chapter-item expanded "><a href="inline-assembly.html"><strong aria-hidden="true">15.</strong> Inline assembly</a></li><li class="chapter-item expanded "><a href="unsafety.html"><strong aria-hidden="true">16.</strong> Unsafety</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="unsafe-keyword.html"><strong aria-hidden="true">16.1.</strong> The unsafe keyword</a></li><li class="chapter-item expanded "><a href="behavior-considered-undefined.html"><strong aria-hidden="true">16.2.</strong> Behavior considered undefined</a></li><li class="chapter-item expanded "><a href="behavior-not-considered-unsafe.html"><strong aria-hidden="true">16.3.</strong> Behavior not considered unsafe</a></li></ol></li><li class="chapter-item expanded "><a href="const_eval.html"><strong aria-hidden="true">17.</strong> Constant Evaluation</a></li><li class="chapter-item expanded "><a href="abi.html"><strong aria-hidden="true">18.</strong> Application Binary Interface</a></li><li class="chapter-item expanded "><a href="runtime.html"><strong aria-hidden="true">19.</strong> The Rust runtime</a></li><li class="chapter-item expanded "><a href="appendices.html"><strong aria-hidden="true">20.</strong> Appendices</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="macro-ambiguity.html"><strong aria-hidden="true">20.1.</strong> Macro Follow-Set Ambiguity Formal Specification</a></li><li class="chapter-item expanded "><a href="influences.html"><strong aria-hidden="true">20.2.</strong> Influences</a></li><li class="chapter-item expanded "><a href="test-summary.html"><strong aria-hidden="true">20.3.</strong> Test summary</a></li><li class="chapter-item expanded "><a href="glossary.html"><strong aria-hidden="true">20.4.</strong> Glossary</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
