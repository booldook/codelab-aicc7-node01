## .env

host="127.0.0.1"
port="3000"

DBMS= "MYSQL"
DB_HOST="localhost"
DB_PORT=3306
DB_USER="root"
DB_PASS="000000"
DB_NAME="shop"
DB_LIMIT=10

SALT_RND=7
SALT_JWT="fkd_sd-jFLk864w"
EXP_ACC_JWT="10m"
EXP_REF_JWT="3h"

## debugger setting.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Nodemon",
      "port": 9229,
      "restart": true,
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

# 백엔드

- 정보를 제공하는 기술

## Content-type

- application/x-www-form-urlencoded
- application/json
- multipart/form-data

## express-validator

### 검증

- isString() // 문자열체크
- isAlpha() // 알파벳만으로 구성
- isAlphanumeric // 알파벳 + 숫자
- isLength({ min: 2, max: 8 }) // 길이체크
- isInt() // 정수
- isFloat() // 실수
- isNumeric() // 숫자형식(문자열로 받아도 숫자형식 true)
- isBoolean()
- isDate() // 날짜형식
- isEmail()
- isURL()
- isArray()
- notEmpty() 0, false, null, undefained, "" -> false
- exists() null, undefined, ""
- optional() // null 다음으로 진행
  - body("publish_d").optional().isDate()

### 정제

- trim() // 앞뒤 공백 제거
- toInt() // 정수로 변환
- toFloat() // 실수로 변환
- toBoolean() // boolean
- normalizeEmail() // 이메일을 표준화(소문자 변환)
- escape() // <, > &lt;, &gt;

### Error 객체

```js
const errors = validationResult(req)
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() })
}
```

```json
{
  "errors": [
    {
      "value": "",
      "msg": "사용자 이름은 필수입니다.",
      "param": "username", // param, query, field, cookie, header
      "location": "body"
    },
    {
      "value": "invalid-email",
      "msg": "유효한 이메일 주소를 입력하세요.",
      "param": "email",
      "location": "body"
    }
  ]
}
```

## Middlewrare사용법

```js
app.use((req, res, next) => {
  // ...
  next()
})
app.get(
  "/books",
  (req, res, next) => {
    // ...
    next()
  },
  (req, res, next) => {
    // ...
    res().status(200).json()
  }
)

app.get(
  "/books",
  [
    (req, res, next) => {
      // ...
      next()
    },
    (req, res, next) => {
      // ...
      next()
    },
  ],
  (req, res, next) => {
    // ...
    res().status(200).json()
  }
)``
```

## WSL2 설치 후 redis-server 실행

```bash
# linux 패키지 현행화
sudo apt update
sudo apt upgrade
sudo apt-get update
sudo apt-get upgrade

# redis-server 설치
sudo apt install redis-server
sudo apt-get install redis-server

# redis-server 시작
sudo systemctl start redis-server
sudo service redis-server start

# redis-server 중지
sudo systemctl stop redis-server
sudo service redis-server stop

# redis-server 자동 실행
sudo systemctl enable redis-server

# redis-server 실행 상태 확인
sudo systemctl status redis-server
```

## 인증/인가

- 인증(Authentication) - 본인확인(로그인)
- 인가(Authorization)- 특정 서비스 접근 제어(로그인 후 권한)

### 백엔드

- 회원가입
  - 아이디/패스워드 + 이름, 이메일, 전화번호
  - 패스워드 암호화(단방향) - bcrypt
- 회원로그인(인증)
  - id(email)/pw -> DB에서 조회
  - 적합한 회원이면 -> client에 accessToken(3~5분), refreshToken(15분 ~ 3시간) 발급
  - token은 jwt(Json Web Token)로 생성
  - JsonWebToken의 장점: 위/변조가 불가능하다.
  - refreshToken은 redis 저장
- Client -> API요청시 Token을 Header에 실어서 보낸다.
  - Header영역에 표준으로 Authorization 항목에 bearer Token으로 보낸다.

### api(Application Provider Interface)정책

- Public API - 회원가입, 로그인, 토큰갱신 + 그 외 비회원 접근 API
- Private API - 인증된 사용자(회원)만 접근 가능한 API

## user table scheme

```sql
CREATE TABLE `user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `usr_id` VARCHAR(16) NOT NULL,
  `usr_pw` VARCHAR(255) NOT NULL,
  `usr_nm` VARCHAR(255) NOT NULL,
  `usr_email` VARCHAR(255) NOT NULL,
  `usr_lv` TINYINT NOT NULL DEFAULT 1,
  `created_dt` DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_general_ci'
;
```

### 생활코딩 Database

[생활코딩DB](https://opentutorials.org/course/3162)
