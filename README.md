# Command

`curl http://localhost:3000/` 
- Received a GET HTTP method

`curl http://localhost:3000/users`
- [{"id":"1","username":"Bolo"},{"id":"2","username":"Gnaise"}]

`curl http://localhost:3000/users/1`
- {"id":"1","username":"Bolo"}

`curl http://localhost:3000/session`
- {"id":"1","username":"Bolo"}

`curl http://localhost:3000/messages`
- [{"id":"1","text":"Hello World","userId":"1"},{"id":"2","text":"By World","userId":"2"}]

`curl http://localhost:3000/messages/1`
- {"id":"1","text":"Hello World","userId":"1"}

`curl -X POST http://localhost:3000/messages`
{"id":"2d55b52f-35f9-4520-a673-3f93f78f80d9","userId":"1"}

`curl -X DELETE  http://localhost:3000/messages/2d55b52f-35f9-4520-a673-3f93f78f80d9`
 - 2d55b52f-35f9-4520-a673-3f93f78f80d9 is delete
 
`curl -X DELETE  http://localhost:3000/messages/100`
- Error: Message id is unknow
