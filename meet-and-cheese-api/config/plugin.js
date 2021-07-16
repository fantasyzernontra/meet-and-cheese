module.exports = {
  upload: {
    provider: "google-cloud-storage",
    providerOptions: {
      bucketName: "asia.artifacts.meet-and-cheese.appspot.com",
      publicFiles: true,
      uniform: false,
      serviceAccount: {
        type: "service_account",
        project_id: "meet-and-cheese",
        private_key_id: "904e6d8378aa4554d5392fe770a9c783c825f5ad",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC/F6+WwxwC0Phq\nwv2Z28lhb7pfeFwEYOSI1uUgqWmKxZSSNz0iWfvzYpiN33NTMzQ0sShR4CFg9yDV\nqDdE4CfjU4dOdCvikQo9CeGnwphgnB1ddsKs33fe8TtwPupqCB15ZuhNgm/ZUxQg\nnPTvdTVGbVTbrajURHooE2C/B0wTCcrlDEp8zhB+2PJuYB2tlCwyGFbyWVSZUonZ\nBi4H4ALZQdtQYqjETng3Ibb07KNZhYeJuMqnWrD8BAXLnx9Z6bvYmOfcaFs0Bh5e\n5CXdpV1w+lkxdxMxk6LHt2BZJCwbMdMNHbVeUezGloD2dTn1OC3LVuz691Ahkklo\ndxUIkLFtAgMBAAECggEADWqTDiVwLcVwr4Q1rGv5MVFYFzRa14ba/L2DtD2YtqDF\nG9frf6IsNYwOVGWkEesWJv3qLAdtqIJpSH7pNHl9a3E1nn07CIrw2lS7hlz7+Ep1\nqFZ6eAsvfhRXPTv5lsyvjxK5zBlUk4BI+Toz2y0SOrnZ25uPbynIntAvenH/dhWa\nnBu3KtP8lgKgCJTshZUkoiK7qk75/rkh3jhM2vTsen6C+UoD8aPY0t3luSaIhz84\nKGOeEtIOah9By1Qe7s1mUqeWiJ6dza5TkExinIpv5ER6CfFPz3yTF0GXD/Xz4qDc\nRgrMCpp7K0s4O5ybSB3l8SSvKqt3ObTTkgn+9vPguQKBgQDhltjUWZCftnocDfZe\nsxiGIMHVAIPbwXMT7f1lipF0uk3yHGUN+U2SO/TQ0SNu6qnpVrywQWYYjd/eNmmq\niPeHsXvBBjVKOHl4dclb0Vkcq7LlqfMKyKzSqccCJAKfQ0bqjVHKX0tCy/NGxWsi\nqIql/6Ayfv5U2CtUYBhFSs2JeQKBgQDY2li5FJzgddlVd8wCWsSFb1uqQ+sgM8rJ\nT/bn06BKIxIKSlfrH85XF+K+YmtD/u4fYeKqR3WI/rRe2n7eZ9tmQ8y7VZmYhpfU\n2O5XGyLnjyM+Ce/0ZEMm+c53oX9Oov47zqTs9oMmkBzcwi132+7qJVaK5RdoL8rW\njRMvxg+elQKBgQC8csIBaiyJbutE4lkMNPpomZayc/KyskCKxoWmvIHUDAovFY9J\nhBhL77AMfJjoADoeRansZ0V9f48i1zugDTkSbq5dyezcap72hRbHj/OsIraYakcw\nnADbHp6zaBeUqaPlLlbEAqUhULSSSzq7QiZIk2lkpXeastZHbtr3j4xxqQKBgQCB\nzoIZmAsoGaNVE/bc2fSVY0ldrHZMunQC+Yj00Ks8da3Q1xu1tT5QyA2EpWlMNIfZ\n5UBHaasjrEPQG76h501f8+nTobPlp3uvf4N8RNQqBHa2JkCq7HF+HT7IQbXxHoRM\nzK/Q4Oc06EM+qkWJX++t3VfmoKfYR/OFZsE7cbXb2QKBgQDaa6OzNMDzQBqcx35Q\n2FsfGLcCVBc8KJ2W9iL/Y00m7HaJl4I2Oba4rjJijoO6TXPn3CN1Ly+EU7KV4yiI\nuJJVkeZcYUlp9Scwq6tt/P3o7GC0kzMc6xdSH6/kFJWKQ0z9Ad0s0CbN+WDUSRLX\nMJH7HCODcQy/jyux1hO7aAKVlQ==\n-----END PRIVATE KEY-----\n",
        client_email:
          "meet-and-cheese-storage-admin@meet-and-cheese.iam.gserviceaccount.com",
        client_id: "110257233059155474254",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url:
          "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url:
          "https://www.googleapis.com/robot/v1/metadata/x509/meet-and-cheese-storage-admin%40meet-and-cheese.iam.gserviceaccount.com",
      },
      basePath: "",
      baseUrl:
        "https://storage.googleapis.com/asia.artifacts.meet-and-cheese.appspot.com",
    },
  },
};
