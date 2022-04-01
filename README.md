# NestJs Monorepo + Pipelines

Microservices have been all the hype lately - and NestJs has begin to pick up on a lot of traction. Most folks prefer using Individual repos for each microservice - which can be a hassle to mantain in the long run, especially when it comes to setting up multiple pipelines, and individual Folders for each microservice Yaml, under a parent environment directory.

## Simplifying the process

Monorepos, Helm Charts and multi-branch pipelines are an excellent way to tackle this problem statement - allowing you to work with a minified approach to fast-paced development; especially if you've got microservices which import common user-created libs.

## Stack Used

- Jenkins: This OSS CI/CD tool helps reducing dependence on a cloud provider's Build and Release tools (eg: AWS CodeDeploy, Azure DevOps), and lets you migrate providers if needed with very less overhead work required.
- Node: (LTS), NestJs
- Docker: Image Build tool - the Dockerfile is multi-stage, and lets you build services based on the build-arg passed, making it Dynamic.
- Helm: This templating tool helps managing individual microservice releases, and negates the need for Environment-specific folders with Kubernetes configuration.
- A Kubernetes cluster: Feel free to use kind/minikube to provision one locally, or use provision one on the respective cloud provider.

## Setup Process

- Cluster NA/NS Creation
    - Setup Namespaces and Service accounts for your environments.
    - Attach correct RBAC policies to the service accounts
- EFK setup (Logging and Monitoring)
    - Create n Persistent Volumes for Elasticsearch to use as part of it's stateful volume claim.
    - Apply the files under ./pipelines/Kubernetes/Normal/EFK/elastic to set up ES.
    - Setup fluentd as a daemonset to forward container logs to elasticsearch.
    - Install Kibana to visualize logs - hit 'Discover' and add logstash* as an index.
- Ingress Nginx
    - Apply ./pipelines/Kubernetes/Normal/Ingress-Nginx/deploy-tls-termination.yaml if you're using AWS, otherwise install it via helm and make changes for your provider - you need to expose the service using an external loadbalancer.
    - Create ExternalNames for your frontend services.
    - Apply the ingress to take care of DNS/Routing to services in different namespaces. 
- Jenkins
    - Create a multibranch pipeline with the repository details, and include the path to the JENKINSFILE.
    - Setup any other credentials that might be needed (eg: Artifactory/Dockerhub/ECR etc)
    - Wait for the branches to be registered post-scan, and trigger a build on the required branch.

## More 

- Sample Istio Configuration
    - Includes Authorisation policies
    - Makes use of PeerAuthentication and "Strict" mode for mtls
    - Includes a Configmap that can be used to ratelimit
    - Has an Initial Gateway defined, and traffic is sent to a particular virtual service (based on context)

## Best Practices

### Security Hardening: EKS/GKE/GCP/On-prem K8s clusters
1. Prefer using dedicated EKS Service Accounts
2. Ensure that Service Account Tokens are only mounted where necessary
3. Encrypt traffic to HTTPS load balancers with TLS certificates
4. Ensure that default service accounts are not actively used
5. Rotate your secrets periodically
6. Scope the IAM Role (or relevant cloud vendor) trust policy for IRSA to the service account name
7. Disable unnecessary protocols for service type

### Security Hardening: Istio
1. Upgrade to the latest stable release of the Istio
2. Enable Service Account Secret Creation
3. Configure third party service account tokens
4. Configure mutual TLS for services to service communication
5. Configure peer authentication policy with STRICT mode
4. Status of logging with appropriate logging level
6. Configure rate limits for requests
7. Enable Istio authorization by creating RbacConfig named default
8. Use default-deny patterns
9. Use ALLOW-with-positive-matching and DENY-with-negative-match patterns
10. Setup virtual firewall rules for services (8,9)
11. Enable Circuit breaking automatically in case of failed requests.
