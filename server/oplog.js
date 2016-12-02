import { RedisOplog } from 'meteor/cultofcoders:redis-oplog'

RedisOplog.init({
	debug: true,
	overridePublishFunction: true
})