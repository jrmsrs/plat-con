<pre>
/** 
 *  v0.0.1
 *  Tables Schema 
 * /
</pre>

```javascript
// typescript obj           type (">" = "ref")     default/onDelete/nullable/pk
channel_members: {
  channel_id: string     // uuid > channels.id     NOT NULL / CASCADE
  created_at: string?    // timestamptz            now()
  id: string             // uuid                   uuid_generate_v4() / PRIMARY
  member_id: string      // uuid > members.id      NOT NULL / CASCADE
}
channels: {
  created_at: string?    // timestamptz            now()
  created_by: string?    // uuid > [auth].users.id auth.uid() / NULL
  description: string?   // text                   NOT NULL
  id: string             // uuid                   uuid_generate_v4() / PRIMARY
  name: string           // text                   NOT NULL
  symbols: string[]?     // text[]                 NULL
  tags: string[]?        // text[]                 NULL
}
content_body: {
  content_id: string     // uuid > contents.id     NOT NULL / CASCADE
  created_at: string?    // timestamptz            now()
  created_by: string?    // uuid > [auth].users.id auth.uid() / NULL
  id: string             // uuid                   uuid_generate_v4() / PRIMARY
  type: string           // text                   NOT NULL
  value: string          // text                   NOT NULL
}
contents: {
  channel_id: string     // uuid > channel.id      NOT NULL / CASCADE
  created_at: string?    // timestamptz            now()
  created_by: string?    // uuid > [auth].users.id auth.uid() / NULL
  description: string?   // text                   NOT NULL
  id: string             // uuid                   uuid_generate_v4() / PRIMARY
  title: string          // text                   NOT NULL
}
members: {
  created_at: string?    // timestamptz            now()
  description: string?   // text                   NULL
  id: string             // uuid                   uuid_generate_v4() / PRIMARY
  stage_name: string     // text                   NOT NULL
  user_id: string?       // uuid > users.id        SET NULL
}
```
