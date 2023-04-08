import { DiscordEmbed } from "./DiscordEmbed"

export interface DiscordMessage {
  id: string
  type: number
  content: string
  channel_id: string
  author: {
    id: string
    username: string
    global_name: null
    display_name: null
    avatar: string
    avatar_decoration: null
    discriminator: string // number as string
    public_flags: number
  }
  attachments: []
  embeds: Array<DiscordEmbed>
  mentions: []
  mention_roles: []
  pinned: boolean
  mention_everyone: boolean
  tts: boolean
  timestamp: string // Date as string: can be parsed with new Date
  edited_timestamp: null
  flags: 0
  components: []
}
