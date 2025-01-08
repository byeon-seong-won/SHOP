<h1> Shopping Mall</h1>
: React를 활용한 사진 쇼핑몰 SPA 



<h2>Site Map</h2>
<img alt="image" src="https://github.com/user-attachments/assets/c1c3a53f-4a58-4516-b2e2-1f2f075b0fd1" style="width:200px;"/>
<img alt="image" src="https://github.com/user-attachments/assets/f5f9a53f-89ea-418f-b62e-013f4c17afe6" style="width:200px;"/>
<img alt="image" src="https://github.com/user-attachments/assets/67ce44a2-f908-41a4-86d6-1a76e111b60f" style="width:200px;"/>



[개인 프로젝트: 2023.06 ~ 2023.07]
<br>
<br>

<h1> Pages </h1>
: 총 3 페이지 (Home | Detail | Cart)
<br>

🔧 Home Page (App.js)
<p>- Router를 이용해 페이지 나누기</p>
<p>- node.js와 mysql 연동으로 DB에 있는 데이터로 가져오기</p>
<p>- createSlice.js 파일과 컴포넌트를 분리/p>
<p>- axios get을 통해 상품 데이터 "더보기" 버튼 클릭시 보여주기(+map 반복문으로 레이아웃 구성)</p>
<p>- 상품 이미지를 클릭하면 해당 상품 Detail page로 이동</p>
<p>- useEffect와 addEventListener를 이용한 헤더 스크롤 이벤트 구현</p>
<br>
<br>

🔧 Detail Page (detail.js)
<p>- redux로 상태관리(index.js)</p>
<p>- 장바구니 담기 클릭시 이중 모달창 : 확인 모달창 노출 -> 확인 클릭시 장바구니로 이동되며 수량 +1 </p>
<p>- 장바구니 담기 버튼 클릭시 이중 모달창 : 확인 모달창 노출 -> 확인 클릭시 장바구니로 이동되며 수량 +1 </p>
<p>- 구매하기 버튼 클릭시 해당 상품 수량 +1, 장바구니 페이지 바로이동</p>
<p>- 장바구니에 중복 상품 있을 경우 수량 +1, 없을 경우 항목 추가</p>
<p>- 탭 기능 구현(+애니메이션 효과)</p>
<p>- 하단 탭메뉴1 공간, 배경색 클릭시 해당 이미지와 배경색상 노출</p>
<p>- 하단 탭메뉴2 각 텍스트 아코디언 메뉴로 노출</p>
<br>
<br>

🔧 Cart Page (cart.js)
<p>- redux로 상태관리(index.js)</p>
<p>- 수량 변경 버튼(+수량이 음수가 되지 않도록  alert 창 노출)</p>
<p>- Detail Page에서 같은 상품을 주문하면 항목추가가 아닌 수량증가가 되는 기능</p>
<p>- 장바구니 항목 삭제 버튼 클릭시 -> 확인 모달창 노출 -> 확인 클릭시 삭제</p>
<p>- 각 상품별 수량에 따른 가격변동과 총 합계 금액 계산</p>


<br>
<br>


<h1> 💻 [2023.07.07~ ] 코드 수정 💻 </h1>
<li>
  Cart page 수량증감 버튼 동작 안 되는 부분 해결
</li>
<li>
  createSlice를 컴포넌트별로 새로운 파일로 분리
</li>
<li>
  App.js 컴포넌트 새로운 파일로 분리
</li>


<br>
<br>



<h1> 💻 [2023.06.27] nodex.js 와 mysql 연동 💻 </h1>

<p> 1. node.js </p>
<br>
<p> 2. mysql에 "product" 데이터베이스 생성 후 "products" 테이블 생성 </p>
<img width="152" alt="image" src="https://github.com/byeon-seong-won/react.js_shopmall_project/assets/136781516/436b9e94-f81f-4f6d-9055-30747344df29">
<br>
<p> 3. "products" 테이블에 id와 name, count, price 칼럼을 생성 한 후 에 30개의 데이터를 넣음</p>
<img width="284" alt="image" src="https://github.com/byeon-seong-won/react.js_shopmall_project/assets/136781516/1cc8ff79-f5a3-4400-a30f-f1b7644f4c49">
<br>
<p> 4. 변수 shoes에 "products" 테이블을 담아 가져옴</p>
<img width="257" alt="image" src="https://github.com/byeon-seong-won/react.js_shopmall_project/assets/136781516/079c2186-7a1d-42da-b0ae-36e6b7ed3c51">
<br>
<p> 5. map 함수를 이용해 shoes안에 있는 데이터들을 뿌려준다. </p>
<img width="269" alt="image" src="https://github.com/byeon-seong-won/react.js_shopmall_project/assets/136781516/46ed1875-f10d-42e0-baf1-31d9361824f7">






