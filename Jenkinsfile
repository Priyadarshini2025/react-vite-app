pipeline {
    agent any

    environment {
        AWS_ACCOUNT_ID = "937991583079"
        AWS_REGION = "us-east-1"
        IMAGE_NAME = "react-vite-app"
        IMAGE_TAG = "${BUILD_NUMBER}"
        ECR_REPO = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${IMAGE_NAME}"
        KUBECONFIG = "/var/lib/jenkins/.kube/config"
    }

    stages {

        stage('Checkout Source Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Login to Amazon ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region $AWS_REGION | \
                docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                docker tag $IMAGE_NAME:$IMAGE_TAG $ECR_REPO:$IMAGE_TAG
                docker tag $IMAGE_NAME:$IMAGE_TAG $ECR_REPO:latest

                docker push $ECR_REPO:$IMAGE_TAG
                docker push $ECR_REPO:latest
                '''
            }
        }

        stage('Update Kubernetes Deployment') {
            steps {
                sh '''
                kubectl set image deployment/react-vite-app react-vite-app=$ECR_REPO:latest
                '''
            }
        }

        stage('Verify Deployment Status') {
            steps {
                sh '''
                kubectl rollout status deployment/react-vite-app
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
