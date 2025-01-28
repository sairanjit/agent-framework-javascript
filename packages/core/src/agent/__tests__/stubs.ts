import type { TransportSession } from '../../transport'
import type { EnvelopeKeys } from '../EnvelopeService'

export class DummyTransportSession implements TransportSession {
  public id: string
  public readonly type = 'http'
  public keys?: EnvelopeKeys
  // public inboundMessage?: AgentMessage
  public hasReturnRoute?: boolean
  public connectionId?: string

  public constructor(id: string) {
    this.id = id
  }

  public send(): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public close(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
