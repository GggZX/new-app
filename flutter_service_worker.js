'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "977c8df1de9a078807408321c38dfadf",
"/.git/config": "fe29b9d81e095033ba1e03fccf269c6e",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/FETCH_HEAD": "f84b38bee79153952376a15b05acec9b",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/index": "961a51ba539585ea711c521249af9a17",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "308372243ea65b91d7dee6064d9629b1",
"/.git/logs/refs/heads/master": "308372243ea65b91d7dee6064d9629b1",
"/.git/logs/refs/remotes/origin/master": "e01f187b929326fb747334457bf5d9f9",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/2f/7efbeab578c8042531ea7908ee8ffd7589fe46": "aa9408a44a7560b833dd793a6cb10ddd",
"/.git/objects/33/a3285936da3d68b0b6e164c767073fd893fa76": "c647a329e42f4c264e89d5149b972c1c",
"/.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
"/.git/objects/4f/94e9bf74e6839d1b24867c5172f986eb540f55": "80af8827260ace376b5d7d919358102d",
"/.git/objects/5c/49a2a079395aca166569b54b03f628a529c184": "69a582838afede53d927d5ac65939c9e",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/85/880f3c3b85398ad33652379304042d6eeb4d29": "4c791ef5f1cda88f683661cfe6318f71",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/92/cf1d3fb5ffeb29568e175eae56fdf4537758cc": "7e053013516d711b27102ef9c8e0e0c8",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/a5/14e0b4a7c268825b2c82ddd8e212246be04ff4": "ea94cdfdca3d0992a32437fc4680532c",
"/.git/objects/b6/69fc2e673890a8847ae8bc26a9491b7e182ad0": "68edbf6c1d5729d7934ce3ea152be142",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
"/.git/objects/c5/db6ca277a61089fec313da9e3fbd0bbe047788": "aa85d34a665b0da0a68d1275099df87a",
"/.git/objects/c7/a1f25d16db94ca98452ed599181eadea161a4e": "3fbb06d6c3e7851ef33a4b058683e577",
"/.git/objects/d4/f4f075757e83978c1f25e7c9c0f90653b504a6": "25d32b664bf24efcd42423f8fdd688a3",
"/.git/objects/dc/9f74c02064428e31e4dc33cac22c342af6b482": "17c01019a620b9ca32b1b479692fafb9",
"/.git/objects/dc/a296418ee34afd37941d41b9e78e34dde5b351": "f1b87a96740ac093f9922f8ff103a9bb",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/e2/06713e3482fec96d8f160328560388d61134e7": "4dcd8e3af189ed3a8d9a900c801d7177",
"/.git/objects/e8/225abc48c65f9e0d4412f5b78f33f2f140bcd7": "6d58e0df5f67768aba38ee646db226f9",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/ORIG_HEAD": "5a4278dc5795a15e9bcac8f3af97145c",
"/.git/refs/heads/master": "dd0e6d5bfc42b54d3619b14564c0e141",
"/.git/refs/remotes/origin/master": "dd0e6d5bfc42b54d3619b14564c0e141",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "9a00df6d3503a9bb5868ce133bc9dd5f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "2d0da3c626eab694e049994d5a5bf289",
"/main.dart.js": "7770f8f0b7d48297694850a9f1d20ef2",
"/manifest.json": "49091ceb72284e925951538d1d300703",
"/_config.yml": "d88166bbeaf9421921db9fb119080112"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
