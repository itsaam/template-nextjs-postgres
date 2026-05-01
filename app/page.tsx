import { nanoid } from 'nanoid'
import { ulid } from 'ulid'

export default function Home() {
  const buildId = `${nanoid(8)}-${ulid()}`
  return (
    <main>
      <span className="badge">hatch · preview · {buildId}</span>
      <h1>Hello from Next.js + Postgres on Hatch</h1>
      <p>
        This is a minimal Next.js 15 (App Router) template wired up to a
        Postgres service. Push a PR and Hatch spawns an isolated preview with
        its own database.
      </p>
      <p>
        Try <a href="/db-check">/db-check</a> to verify Postgres connectivity,
        or <a href="/api/health">/api/health</a> for the healthcheck endpoint.
      </p>
    </main>
  )
}
