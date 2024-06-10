this is a idea app for your ideas 

this prohect has some bug and erorr
# err
the files and the things related to database(mongodb0) doesn't work 
like when you click a buttom or link to database or related to database to recieve data, it doesn't work 
like ejs files style that related to database cannot have style.css


i don't know why maybe it cause of  sanction or filtering and maybe my fault 



////////////////////////////////
# this is the error

CastError: Cast to ObjectId failed for value "style.css" (type string) at path "_id" for model "Idea"
    at SchemaObjectId.cast (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\schema\objectId.js:250:11)
    at SchemaType.applySetters (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\schemaType.js:1236:12)
    at SchemaType.castForQuery (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\schemaType.js:1653:17)
    at cast (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\cast.js:375:32)
    at Query.cast (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\query.js:4798:12)
    at Query._castConditions (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\query.js:2206:10)
    at model.Query._findOne (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\query.js:2526:8)
    at model.Query.exec (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\query.js:4342:80)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  stringValue: '"style.css"',
  messageFormat: undefined,
  kind: 'ObjectId',
  value: 'style.css',
  path: '_id',
  reason: BSONError: input must be a 24 character hex string, 12 byte Uint8Array, or an integer
      at new ObjectId (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\bson\lib\bson.cjs:2361:23)
      at castObjectId (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\cast\objectid.js:25:12)
      at SchemaObjectId.cast (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\schema\objectId.js:248:12)
      at SchemaType.applySetters (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\schemaType.js:1236:12)
      at SchemaType.castForQuery (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\schemaType.js:1653:17)
      at cast (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\cast.js:375:32)
      at Query.cast (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\query.js:4798:12)
      at Query._castConditions (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\query.js:2206:10)
      at model.Query._findOne (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\query.js:2526:8)
      at model.Query.exec (F:\coding project\coding\projects to github\nodejs ideas app\node_modules\mongoose\lib\query.js:4342:80),
  valueType: 'string'
}