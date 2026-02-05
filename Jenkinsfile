pipeline {
  agent any

  tools {
    nodejs 'Node_18'
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install') {
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm ci'
        sh 'npx playwright install'
      }
    }

    stage('Run tests') {
      steps {
        sh 'npx playwright test'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
      archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
    }
  }
}
