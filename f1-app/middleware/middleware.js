export default function(ctx) {
    if (ctx.route.fullPath == "pilotes") ctx. redirect(301, "pilotes");
    if (ctx.route.fullPath == "ecurie") ctx. redirect(301, "ecurie");
    if (ctx.route.fullPath == "/") ctx. redirect(301, "index");

}
