
const useHtml = () => {

    const addClassInBody = () => {
        const _document = document.querySelector("html");
        const _documentbody = document.querySelector("body");
        const _docu__next = document.getElementById("__next");
        if (_document !== null && _documentbody !== null) {
            _document.style.overflow = "hidden";
            _document.style.height = "100vh";
            _documentbody.style.height = "100vh";
            _docu__next?.classList.add("nextHidden");
        }
    }

    const removeFromBody = () => {
        const _document = document.querySelector("html");
        const _documentbody = document.querySelector("body");
        const _docu__next = document.getElementById("__next");
        if (_document !== null && _documentbody !== null) {
            _document.style.overflow = "auto";
            _document.style.height = "auto";
            _documentbody.style.height = "auto";
            _docu__next?.classList.remove("nextHidden");
        }
    }

    return { addClassInBody, removeFromBody }
}

export default useHtml