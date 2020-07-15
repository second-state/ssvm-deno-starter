import { serve } from "https://deno.land/std@0.61.0/http/server.ts";
import { say } from '../pkg/functions_lib.js';

type Resp = {
    body: string;
}

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  let r = {} as Resp;
  r.body = say (" World\n");
  req.respond(r);
}
