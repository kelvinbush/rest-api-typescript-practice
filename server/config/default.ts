export default {
  port: 1337,
  origin: "http://localhost:3000",
  dbUri: "mongodb://localhost:27017/rest-api-tutorial",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCA4NQiKouRlyMvfBbG/86XiNUjeuNd6RrBd0CBlUSiJQyIV5+8
YI95H0DJJBb2ohEjs3HhS2GiEYJ7JAbiiJjdlyozBqaf2FV/neunrBaObWNagUkn
gACktagUBRDhHbuzTU/kgcn1qL5fUghDSV6Q8gHwNz5QE3eHWMvCTYdteQIDAQAB
AoGABAB3NdRiXxP1WL0eq/E3hgcOrzpaowjg9s7wJtXuuqYx3G30HNJWwikRRu2i
9OeVZqlkyN0hW/n1NkOpHxGkxXllEO925Uqf7DeWNOmFN6MeZ37a0+8sHulNjM+P
X+m7nv3vRfiovBQYUS/pwChMkg6TtbLV5ChbrFjKqC+TWx0CQQDCD9K8FwTHIFIZ
T5GEBi9CP0EUhENo9tvg5ldlpZHyYlPaOpKmpqyPX1t+mgg8AT8uDsObLLL0xnL9
wdNbDmgPAkEAqgMP1tj6Gv45R2sWkXeBuIiI+b+iTB5HdPdQC3TvrLqGICYQEmZ+
tfDHqk1jbWIOETgz9pHNpZGqwI7Hiv+J9wJAWD8ty06EY7C05MGkIG9Xij6Nb7D9
nnuzXUAhuh1ikuBX1UMRcSsWCVSJnLaay/6dJmqcVLIs5tZfcDl1zVBtzQJBAKDm
vvHebm5nljxCXJyV1x6XkdOUi3yw134aphYBuOfnrBL3ExTnDhsRY1aJYYVfXOLt
Jzi/6zo8r7cIKlAh4ycCQQCRsBm2JGF98E1MznbvwsrL3I1oOfaSlhdJOKQO4x3K
GTNbqcv3lTApyZCud7hq8jpGu6Wb3hs0BmAxltYvw+zs
-----END RSA PRIVATE KEY-----`,
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCA4NQiKouRlyMvfBbG/86XiNUj
euNd6RrBd0CBlUSiJQyIV5+8YI95H0DJJBb2ohEjs3HhS2GiEYJ7JAbiiJjdlyoz
Bqaf2FV/neunrBaObWNagUkngACktagUBRDhHbuzTU/kgcn1qL5fUghDSV6Q8gHw
Nz5QE3eHWMvCTYdteQIDAQAB
-----END PUBLIC KEY-----`,
};
