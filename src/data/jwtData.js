export const jwtData = {
  header: {
    title: "HEADER",
    color: "#FF69B4",

    fields: [
      {
        key: "alg",
        value: "HS256",
        description: "Signing algorithm used to generate the JWT signature."
      },
      {
        key: "typ",
        value: "JWT",
        description: "Specifies that this token is a JSON Web Token."
      }
    ],

    explanation:
      "The Header contains metadata about the JWT. It tells the receiver which algorithm was used to sign the token.",

    didYouKnow:
      "The header is Base64URL encoded, not encrypted. Anyone can decode and read it."
  },

  payload: {
    title: "PAYLOAD",
    color: "#6C63FF",

    fields: [
      {
        key: "sub",
        value: "12345",
        description: "Unique identifier of the user."
      },
      {
        key: "name",
        value: "Jone Due",
        description: "User's display name."
      },
      {
        key: "email",
        value: "jhon@example.com",
        description: "User email address."
      },
      {
        key: "role",
        value: "admin",
        description: "Authorization role."
      },
      {
        key: "iat",
        value: "1717000000",
        description: "Issued At timestamp."
      },
      {
        key: "exp",
        value: "1717003600",
        description: "Expiration timestamp."
      }
    ],

    explanation:
      "The Payload contains claims about the user or application. Claims are pieces of information that your application needs.",

    didYouKnow:
      "Payload data is NOT encrypted. Never store passwords, API keys, or sensitive secrets inside a JWT."
  },

  signature: {
    title: "SIGNATURE",
    color: "#39FF14",

    fields: [
      {
        key: "algorithm",
        value: "HMAC SHA256",
        description: "Cryptographic hashing algorithm."
      },
      {
        key: "secret",
        value: "********",
        description: "Server-side secret used to create the signature."
      }
    ],

    explanation:
      "The Signature protects the JWT from tampering. If someone changes the Header or Payload, the signature becomes invalid.",

    formula:
      "HMACSHA256(base64Url(Header) + '.' + base64Url(Payload), Secret)",

    didYouKnow:
      "The secret key never leaves the server. Only the server should know it."
  },

  jwt: {
  title: "JWT TOKEN",
  color: "#00F5FF",

  fields: [
    {
      key: "Header",
      value: "Base64URL",
      description: "Encoded JWT header."
    },
    {
      key: "Payload",
      value: "Base64URL",
      description: "Encoded JWT payload."
    },
    {
      key: "Signature",
      value: "HMAC SHA256",
      description: "Digital signature generated using the secret key."
    }
  ],

  explanation:
    "A JSON Web Token (JWT) is formed by combining the Base64URL encoded Header, the Base64URL encoded Payload, and the Signature. These three parts are joined together using dots (.).",

  formula:
    "JWT = Base64Url(Header) + '.' + Base64Url(Payload) + '.' + Signature",

  didYouKnow:
    "A JWT is digitally signed, not encrypted. Anyone can decode the Header and Payload, but without the secret key they cannot create a valid Signature."
}

};