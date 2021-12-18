# NestJs Monorepo + Pipelines

Microservices have been all the hype lately - and NestJs has begin to pick up on a lot of traction. Most folks prefer using Individual repos for each microservice - which can be a hassle to mantain in the long run, especially when it comes to setting up multiple pipelines, and individual Folders for each microservice Yaml, under a parent environment directory.

## Simplifying the process

Monorepos, Helm Charts and multi-branch pipelines are an excellent way to tackle this problem statement - allowing you to work with a minified approach to fast-paced development; especially if you've got microservices which import common user-created libs.

## Stack Used

- Jenkins: This OSS CI/CD tool helps reducing dependence on a cloud provider's Build and Release tools (eg: AWS CodeDeploy, Azure DevOps), and lets you migrate providers if needed with very less overhead work required.
- Node (LTS), NestJs
- Docker: Image Build tool - the Dockerfile is multi-stage, and lets you build services based on the build-arg passed, making it Dynamic.
- Helm: This templating tool helps managing individual microservice releases, and negates the need for Environment-specific folders with Kubernetes configuration.
- A Kubernetes cluster: Feel free to use kind/minikube to provision one locally, or use provision one on the respective cloud provider.

## To-Do

- [x] Pre and Post Deployment Checks
- [ ] Docker-compose file with mounts for easy local development (supports hot reloads)
- [ ] Use Istio as a Service Mesh
- [ ] Include Dynamic Sonarqube runs/Quality Gate checks
- [ ] Impliment a SAST tool to scan Static code
- [ ] Use a SCA tool to scan OSS dependencies
- [ ] Include Image scanning for vulnerabilities
