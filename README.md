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
