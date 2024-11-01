# Cat Picture App 🐱

이 애플리케이션은 간단한 Express 서버를 통해 무작위 고양이 사진을 제공하며, Docker로 손쉽게 배포할 수 있습니다.

# 프로젝트 구조

cat-picture-app/
├── docker-compose.yml            # Docker Compose 설정 파일
├── backend/                      # 백엔드 (Express 서버)
│   ├── Dockerfile                # 백엔드용 Dockerfile
│   ├── package.json              # 백엔드 의존성 및 설정 파일
│   ├── package-lock.json         # 백엔드 의존성 버전 고정 파일
│   ├── public/                   # 백엔드 정적 파일 폴더
│   │   └── index.html            # 백엔드 루트에 접근할 때 제공되는 기본 HTML 파일
│   └── src/                      # 백엔드 소스 코드
│       ├── index.js              # Express 서버 메인 파일
│       ├── routes/
│       │   └── catRoutes.js      # /cat 경로를 처리하는 라우터
│       └── services/
│           └── catService.js     # 외부 API 요청 로직
└── frontend/                     # 프론트엔드 (React 애플리케이션)
    ├── Dockerfile                # 프론트엔드용 Dockerfile
    ├── package.json              # 프론트엔드 의존성 및 설정 파일
    ├── package-lock.json         # 프론트엔드 의존성 버전 고정 파일
    ├── public/                   # 프론트엔드 정적 파일 폴더
    │   └── index.html            # React 애플리케이션 진입 HTML 파일
    └── src/                      # 프론트엔드 소스 코드
        ├── App.js                # React 메인 컴포넌트
        └── index.js              # React 애플리케이션 진입 파일

# 시작하기

다음 설명은 Docker 환경에서 Cat Picture App을 설정하고 실행하는 방법을 안내합니다.

# 필요 사항

Docker: Docker가 설치되어 있어야 합니다. Docker 공식 웹사이트에서 다운로드할 수 있습니다.
Docker Compose: Docker Compose가 설치되어 있어야 합니다. 보통 Docker Desktop과 함께 설치되며, docker-compose --version 명령어로 확인할 수 있습니다.

# 설치 및 실행 방법

1. 이 저장소를 클론합니다. (GitHub에 올린 경우)

git clone https://github.com/username/catapp.git # 이름 바꾸기

cd catapp

2. 의존성 설치 (필요한 경우)

각 디렉터리(백엔드 및 프론트엔드)에서 package-lock.json 파일이 없는 경우, 다음 명령어로 의존성을 설치하고 package-lock.json 파일을 생성합니다.

## 백엔드 디렉터리에서
cd backend
npm install

## 프론트엔드 디렉터리에서
cd ../frontend
npm install

3. Docker Compose로 컨테이너 빌드 및 실행

프로젝트의 루트 디렉터리에서 다음 명령어를 실행하여 Docker Compose로 컨테이너를 빌드하고 실행합니다.

docker-compose up --build -d

4. 애플리케이션 접근:

프론트엔드: http://localhost:3000에서 React 애플리케이션을 확인할 수 있습니다.
백엔드: http://localhost:8080/cat에서 고양이 이미지를 제공하는 API가 작동하는지 확인할 수 있습니다.

# API 엔드포인트

GET /: 환영 메시지를 반환합니다.
GET /cat: 외부 API에서 무작위로 고양이 이미지를 가져와 표시합니다.

# 빌드 및 실행 확인

컨테이너 상태 확인: 컨테이너가 정상적으로 실행 중인지 확인하려면 다음 명령어를 사용하세요.

docker ps

로그 확인: 각 서비스의 로그를 확인하여 오류가 없는지 확인할 수 있습니다.

docker-compose logs backend
docker-compose logs frontend

# 종료 방법

터미널에서 Ctrl + C를 눌러 애플리케이션을 종료하고, 아래 명령어로 컨테이너를 정리합니다.

docker-compose down

# 기술 스택

프론트엔드: React, Axios
백엔드: Express, Axios
데이터 요청: Cataas API (https://cataas.com/cat)

# 라이선스

이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.
