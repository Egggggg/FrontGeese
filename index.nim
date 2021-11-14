include karax/prelude

type
    Filter = enum
        post

var
    filter: Filter

proc selected(v: varargs[Filter]): cstring =
    (if filter in v: cstring"selected" else: cstring(nil))

proc createDom(data: RouterData): VNode =
    if data.hashPart == "#/post":
        filter = post
            

setRenderer createDom