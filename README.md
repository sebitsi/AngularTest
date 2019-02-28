# Navodila za postavitev

V prvi fazi je potrebno v Azure postaviti Kubernetes service, ki nam omogoča izvajanje kubernetes komand v 'cmd' prompt ter vpogled v dashboard z navodili, ki so na njihovi strani.

Nato se povežemo na Azure DevOps, kjer najdemo zavihek Pipelines. Pod zavihkom 'builds' se prvo povežemo na naš GitHub repozitorij in določimo tip proženja (ob vsaki spremembi, ročno). Nato pod prvim in edinim Agent Job začnemo nizati taske:
1. Node (Inštalacija poljubne verzije Node.js)
2. Docker login
3. Docker build (Naša mapa, ki jo z Gita vlečemo, naj ima Dockerfile, v katerem je določeno katere datoteke se vključijo v naš build.)
4. Docker tag (Verzija ali ime imaga (v1, 150, prva-verzija, itd.)
5. Docker push (Upload v določen repozitorij. Login je potreben za to fazo.)

Agent Job naj bo linux, saj so v primeru Windows bile neke komplikacije.

Nato skočimo v 'Releases' zavihek, kjer ustvarimo nov release in kot artifact določimo ta build. V proženju lahko izberemo, ali se release izvaja ročno ali avtomatsko po uspešno končanem buildu.
Tam z Command prompt taskom pokličemo .yaml datoteko, ki jo imamo že pripravljeno v GitHubu. To naredimo z 'kubectl apply -f (pot datoteke). Da bo naš image up to date nato uporabimo še ukaz 'kubectl set', v katerem popravimo image na $(Build.BuildId), katerega tudi uporabimo pri 'Docker tag' v tretjem koraku (glej gor).

V našem .yaml filu moramo definirati vsaj deployment in service. Pri service pazimo, da je target port takšen, kot ga zahteva nek servis, ki ga uporabljamo v image (npr. 80), in določimo navaden port na poljubno število. Tip nastavimo na 'LoadBalancer'. 

(to je le osnutek)
