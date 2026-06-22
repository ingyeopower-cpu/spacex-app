# SpaceX Android Mobile App

This is a React Native (Expo) app that provides a beautiful dark-themed dashboard for SpaceX information, including the $SPCX stock ticker, a news feed, and upcoming launch schedules.

## 🚀 How to Run Locally

To easily download and run this app on your PC or Mac, follow these steps:

### 1. Prerequisites
- **Node.js**: You must have Node.js installed. [Download it here](https://nodejs.org) (Choose the LTS version).
- **Expo Go**: Install the "Expo Go" app on your iOS or Android device from the App Store / Play Store.

### 2. Installation
Open your terminal (Command Prompt / PowerShell) and run:
```bash
# Clone the repository (if you haven't downloaded the zip)
git clone https://github.com/ingyeopower-cpu/spacex-app.git
cd spacex-app

# Install all required packages
npm install
```

### 3. Running the App
Run the following command to start the development server:
```bash
npx expo start
```
- A QR code will appear in your terminal.
- Open the **Expo Go** app on your phone and scan the QR code.
- The SpaceX app will now build and run directly on your smartphone!

---

## 🇰🇷 모바일에서 실행하는 방법 (간단 안내)

이 앱은 **Expo**를 사용하여 제작되었습니다. 모바일 기기에서 간단하게 실행하려면 다음 단계를 따르세요:

### 1. 사전 준비
- **모바일 기기**: 앱스토어(iOS) 또는 플레이 스토어(Android)에서 **"Expo Go"** 앱을 설치합니다.
- **PC**: [Node.js](https://nodejs.org)가 설치되어 있어야 합니다.

### 2. 설치 및 실행
PC의 터미널(또는 명령 프롬프트)에서 아래 명령어를 순서대로 입력합니다:

```bash
# 의존성 패키지 설치
npm install

# 서버 시작
npx expo start
```

### 3. 모바일 연결
- 서버가 실행되면 터미널에 **QR 코드**가 나타납니다.
- 모바일 기기에서 **Expo Go** 앱을 열고 이 QR 코드를 스캔합니다.
- 잠시 기다리면 SpaceX 앱이 스마트폰에서 바로 실행됩니다!

---

## 🌐 Web Mode (Expo Go 없이 실행하기)

이 앱은 웹 버전으로도 제공되므로, **Expo Go 앱을 설치하지 않고도** 모바일 브라우저(크롬, 사파리 등)에서 바로 실행할 수 있습니다.

### 1. GitHub Pages 이용 (권장)
GitHub Actions를 통해 자동으로 배포된 웹 버전을 사용할 수 있습니다.
- 주소: `https://<사용자이름>.github.io/spacex-app/`
- 장점: 별도의 설치 없이 URL만으로 어디서든 접속 가능합니다.

### 2. 로컬에서 웹 버전 실행하기
PC에서 웹 버전을 빌드하고 로컬 네트워크를 통해 접속할 수 있습니다.

```bash
# 1. 웹 버전 빌드
npx expo export --platform web

# 2. 웹 서버 실행 (serve 패키지 사용)
npx serve dist
```
- 서버가 실행되면 나타나는 주소(예: `http://192.168.x.x:3000`)로 모바일 브라우저에서 접속하세요.
- PC와 모바일이 **같은 Wi-Fi**에 연결되어 있어야 합니다.

---
*Built with Expo Router, React Native, and ❤️*
