import { SkillBadge } from '../_components/SkillBadge'

export default function Skills() {
  return (
    <main className="flex flex-col justify-center mt-8 gap-5">
      <h2 className="text-2xl font-bold">Linguagens de programação:</h2>
      <div className="grid grid-cols-4 justify-left gap-3">
        <SkillBadge src="/svg/javascript.svg" name="JavaScript" />
        <SkillBadge src="/svg/typescript.svg" name="TypeScript" />
        <SkillBadge src="/svg/golang.svg" name="Golang" />
        <SkillBadge src="/svg/swift.svg" name="Swift" />
      </div>

      <h2 className="text-2xl font-bold mt-6">Front-end:</h2>
      <div className="grid grid-cols-4 justify-left gap-3">
        <SkillBadge src="/svg/html.svg" name="HTML" />
        <SkillBadge src="/svg/css.svg" name="CSS" />
        <SkillBadge src="/svg/bootstrap.svg" name="Bootstrap" />
        <SkillBadge src="/svg/react.svg" name="React" />
        <SkillBadge src="/svg/nextjs.svg" name="Next.js" />
        <SkillBadge src="/svg/framermotion.svg" name="Framer Motion" />
        <SkillBadge src="/svg/mui.svg" name="Material UI" />
        <SkillBadge src="/svg/styled-components.svg" name="Styled Components" />
        <SkillBadge src="/svg/tailwind.svg" name="Tailwind CSS" />
        <SkillBadge src="/svg/reactrouter.svg" name="React Router" />
      </div>

      <h2 className="text-2xl font-bold mt-6">Back-end:</h2>
      <div className="grid grid-cols-4 justify-left gap-3">
        <SkillBadge src="/svg/nodejs.svg" name="Node.js" />
        <SkillBadge src="/svg/nestjs.svg" name="NestJS" />
        <SkillBadge src="/svg/expressjs.svg" name="Express.js" />
        <SkillBadge src="/svg/fastify.svg" name="Fastify" />
        <SkillBadge src="/svg/jest.svg" name="Jest" />
        <SkillBadge src="/svg/cypress.svg" name="Cypress" />
        <SkillBadge src="/svg/prisma.svg" name="Prisma" />
        <SkillBadge src="/svg/rest.svg" name="REST" />
        <SkillBadge src="/svg/grpc.svg" name="gRPC" />
        <SkillBadge src="/svg/graphql.svg" name="GraphQL" />
      </div>

      <h2 className="text-2xl font-bold mt-6">Banco de dados:</h2>
      <div className="grid grid-cols-4 justify-left gap-3">
        <SkillBadge src="/svg/mysql.svg" name="MySQL" />
        <SkillBadge src="/svg/postgresql.svg" name="PostgreSQL" />
        <SkillBadge src="/svg/redis.svg" name="Redis" />
        <SkillBadge src="/svg/mongodb.svg" name="MongoDB" />
      </div>

      <h2 className="text-2xl font-bold mt-6">Infraestrutura:</h2>
      <div className="grid grid-cols-4 justify-left gap-3">
        <SkillBadge src="/svg/docker.svg" name="Docker" />
        <SkillBadge src="/svg/kubernetes.svg" name="Kubernetes" />
        <SkillBadge src="/svg/ngnix.svg" name="Ngnix" />
        <SkillBadge src="/svg/vercel.svg" name="Vercel" />
        <SkillBadge src="/svg/cloudflare.svg" name="Cloudflare" />
      </div>

      <h2 className="text-2xl font-bold mt-6">DevOps:</h2>
      <div className="grid grid-cols-4 justify-left gap-3">
        <SkillBadge src="/svg/ansible.svg" name="Ansible" />
        <SkillBadge src="/svg/sonarqube.svg" name="SonarQube" />
        <SkillBadge src="/svg/opentelemetry.svg" name="OpenTelemetry" />
        <SkillBadge src="/svg/terraform.svg" name="Terraform" />
        <SkillBadge src="/svg/git.svg" name="Git" />
        <SkillBadge src="/svg/github.svg" name="GitHub" />
      </div>

      <h2 className="text-2xl font-bold mt-6">Outros:</h2>
      <div className="grid grid-cols-4 justify-left gap-3">
        <SkillBadge src="/svg/figma.svg" name="Figma" />
        <SkillBadge src="/svg/photoshop.svg" name="PhotoShop" />
        <SkillBadge src="/svg/wordpress.svg" name="WordPress" />
        <SkillBadge src="/svg/apachekafka.svg" name="Apache Kafka" />
        <SkillBadge src="/svg/rabbitmq.svg" name="RabbitMQ" />
        <SkillBadge src="/svg/consul.svg" name="Consul" />
        <SkillBadge src="/svg/vscode.svg" name="VSCode" />
      </div>
    </main>
  )
}
