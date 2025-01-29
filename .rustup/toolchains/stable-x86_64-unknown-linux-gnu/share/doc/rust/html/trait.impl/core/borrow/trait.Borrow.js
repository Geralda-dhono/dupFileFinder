(function() {
    var implementors = Object.fromEntries([["alloc",[["impl <a class=\"trait\" href=\"alloc/borrow/trait.Borrow.html\" title=\"trait alloc::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl <a class=\"trait\" href=\"alloc/borrow/trait.Borrow.html\" title=\"trait alloc::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"core/ffi/c_str/struct.CStr.html\" title=\"struct core::ffi::c_str::CStr\">CStr</a>&gt; for <a class=\"struct\" href=\"alloc/ffi/struct.CString.html\" title=\"struct alloc::ffi::CString\">CString</a>"],["impl&lt;'a, B&gt; <a class=\"trait\" href=\"alloc/borrow/trait.Borrow.html\" title=\"trait alloc::borrow::Borrow\">Borrow</a>&lt;B&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, B&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a> + ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div>"],["impl&lt;T, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"alloc/borrow/trait.Borrow.html\" title=\"trait alloc::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"core/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"alloc/borrow/trait.Borrow.html\" title=\"trait alloc::borrow::Borrow\">Borrow</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"alloc/borrow/trait.Borrow.html\" title=\"trait alloc::borrow::Borrow\">Borrow</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T, A&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"alloc/borrow/trait.Borrow.html\" title=\"trait alloc::borrow::Borrow\">Borrow</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T, A&gt;"]]],["core",[]],["std",[["impl <a class=\"trait\" href=\"std/borrow/trait.Borrow.html\" title=\"trait std::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl <a class=\"trait\" href=\"std/borrow/trait.Borrow.html\" title=\"trait std::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[3014,12,666]}