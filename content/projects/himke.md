# 힘캐 - 🏋🏻‍♂️ iOS 운동일지 앱
<img src="/content/himke/appstore-open.png" alt="앱스토어 출시 캡쳐 화면" class="w-52"/>

## 1. 개요
**힘캐**는 벌크업(근력증가)를 위한 운동일지 어플리케이션입니다.

* 스트롱리프트5x5, GVT10x10 두 가지 운동 프로그램을 제공
* 운동일지 작성, 조회
* 월간활성사용자(MAU) 평균 6명
* 2023년 7월에 iOS출시
* 2024년 7월 서비스 종료

## 1.1 스크린샷
<div class="flex flex-wrap gap-3">
    <img src="/content/himke/screenshot-2.png" alt="화면2" class="w-36"/>
    <img src="/content/himke/screenshot-3.png" alt="화면3" class="w-36"/>
    <img src="/content/himke/screenshot-4.png" alt="화면4" class="w-36"/>
    <img src="/content/himke/screenshot-5.png" alt="화면5" class="w-36"/>
    <img src="/content/himke/screenshot-6.png" alt="화면6" class="w-36"/>
    <img src="/content/himke/screenshot-1.png" alt="화면1" class="w-36"/>
</div>


## 2. 개발
- **개발기간**: 2개월
- **개발인원**: 1명
- **개발환경**: MacOS, VSCode, Xcode
- **사용기술**: Flutter, Dart, ChatGPT, Copilot
- **상태관리**: riverpod
- **디자인패턴**: DDD(Domain Driven Design)
- **서버**: 사용하지 않음
    * 사용자 데이터는 디바이스 내부에 저장
    * [sqflite](https://pub.dev/packages/sqflite) 패키지 사용
- **통계**: Firebase Analytics 사용

### 2.2 개발과정
* Flutter로 iOS 앱 개발.
* testflight를 통해 사전 테스트 진행. 
* 1일 1회 이상 업데이트.
* 주 3회 직접 운동하며 QA 및 사용성 테스트.
* 회사에서 DDD를 사용하여 개발하고 있어 DDD를 적용해봄.
* VSCode에 Copilot - extension 설치 하여 개발 생산성 높임.
* CHAT-GPT로 운동 정보, 운동 이미지 생성.

## 3. 스토리

### 3.1 만든이유
* 운동일지를 메모장, 엑셀로 작성하는 것이 불편함을 느낌.
* 내 운동/건강 데이터는 특정 서버에 의존하지 않고 직접 관리하고 싶었음.

### 3.2 출시
* 앱스토어 개발자 등록하기 위해 12만원/1년 결제.
* 앱스토어 앱 관련 정보 입력.
* 이용약관 페이지 필요하여 github page로 정적 페이지 생성.
* 심사 실패 후 수정하여 재심사.
    * 실패1: 이용약관페이지를 노션링크로 제공하여 실패. (노션링크가 public접근이 아니였음)
    * 실패2: 앱스토어 앱 설명에 앱의 기능을 명확히 설명하지 않아 실패.
    * 실패3: 캡쳐화면이 앱의 기능을 명확히 설명하지 않아 실패.
    * 실패4: 아이패드 캡쳐화면에 debug모드가 보여 실패.
* 2주간 심사, 재심사 반복 후 출시 성공.

### 3.3 서비스종료
* 출시기간 1년간 MAU 6명은 현저히 낮다고 판단.
* 매년 12만원 결제가 부담스러워 서비스 종료 결정.
* 2024년 7월 서비스 종료.