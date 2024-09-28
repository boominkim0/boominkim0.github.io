---
path: "/content/project/company-festival"
ogImage:
  component: Default
  props:
    title: 회사 체육대회 웹앱을 만들다. 🎊
    description: 시키지도 않은 일을 굳이 한 이유..
sitemap:
  loc: /content/project/company-festival
  lastmod: 2024-09-28
  changefreq: monthly
  priority: 0.8
---

# 회사 체육대회 웹앱을 만들다 🎊
<img src="/content/company-festival/festival-1.png" alt="체육대회 웹앱 화면" class="w-96"/>

## 1. 개요
회사 워크샵(체육대회)때 진행할 웹앱을 만들었습니다.
누가 이길지 배팅하여 마지막 배팅점수가 제일 높은 사람에게 상품을 주는 이벤트를 진행했습니다.

## 1.1 스크린샷
<div class="flex flex-wrap gap-3">
    <img src="/content/company-festival/festival-2.png" alt="화면2" class="w-96"/>
    <img src="/content/company-festival/festival-3.png" alt="화면3" class="w-96"/>
    <img src="/content/company-festival/festival-4.png" alt="화면4" class="w-96"/>
    <img src="/content/company-festival/festival-5.png" alt="화면5" class="w-96"/>
</div>


## 2. 개발
- **개발기간**: 1개월(2023.10.05 ~ 2023.11.13)
- **개발인원**: 1명
- **개발환경**: MacOS, VSCode
- **프론트엔드**: HTML, CSS, JavaScript (프레임워크 미사용)
- **백엔드**: Firebase
  * Firebase-Hosting
  * Firebase-Firestore
  * Firebase-Auth
  * Firebase-Functions 

### 2.1 과정
* 먼저 PPT부터 만들어서 직원들끼리 공유하며 의견 수렴.
* 재빠르게 개발하기 위해 프레임워크를 사용하지 않고 순수 HTML, CSS, JavaScript로 개발.
* 프로토타입 배포 후 개발자 직원들끼리 해킹 가능한지, 트레픽 요청 테스트.
* 테스트 진행 결과 바탕으로 Firebase 인스턴스 관련 설정.

### 2.2 프로세스
* HTML에서 Firebase-Auth로 로그인 구현.
* Firebase-Functions로 배팅점수 업데이트.
* Firebase-Firestore로 배팅점수 저장.
* Firebase-Firestore Watch기능으로 각 클라이언트에 실시간으로 배팅점수 업데이트.
* Firebase-Hosting으로 배포.

## 3. 스토리
### 3.1 배경
* L회사에서는 매년 워크샵을 진행합니다.
* 워크샵마다 담당자를 지정하는데 이번에는 저를 담당자로 지정했습니다.
* 저는 운동을 좋아해서 체육대회를 진행하자고 제안했습니다.
* 그치만 체육대회를 싫어하는 직원들이 많아서 참가율이 낮을 것 같았습니다.
* 그래서 배팅을 통해 참가율을 높일 수 있지 않을까 생각했습니다.
* 배팅을 하기 위해 웹앱을 만들기로 했습니다.

### 3.2 결과

<div class="flex flex-wrap gap-3">
    <img src="/content/company-festival/play-1.JPG" alt="강당1" class="w-96"/>
    <img src="/content/company-festival/play-2.JPG" alt="강당2" class="w-96"/>
    <img src="/content/company-festival/play-3.JPG" alt="강당3" class="w-96"/>
</div>
