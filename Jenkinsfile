pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install') {
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm ci'
        sh 'npx playwright install --with-deps'
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
