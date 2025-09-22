pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull latest code from your GitHub repo
                git branch: 'master',
                    url: 'https://github.com/machoyamwangi/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Deploy to Render') {
            steps {
                // Trigger Render deploy via webhook
                withCredentials([string(credentialsId:'render-webhook',variable:'deploy')]){
                sh 'curl -X POST $deploy'}
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully and deployed to Render!'
        }
        failure {
            echo '❌ Pipeline failed. Check Jenkins logs.'
        }
    }
}

