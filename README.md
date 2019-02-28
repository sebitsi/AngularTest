# Navodila za postavitev

V prvi fazi je potrebno v Azure postaviti Kubernetes service, ki nam omogoča izvajanje kubernetes komand v 'cmd' prompt ter vpogled v dashboard z navodili, ki so na njihovi strani.

### 'Build' faza
Nato se povežemo na Azure DevOps, kjer najdemo zavihek Pipelines. Pod zavihkom 'builds' se prvo povežemo na naš GitHub repozitorij in določimo tip proženja (ob vsaki spremembi, ročno). Nato pod prvim in edinim Agent Job začnemo nizati taske:
1. Node (Inštalacija poljubne verzije Node.js)
2. Docker login
3. Docker build (Naša mapa, ki jo z Gita vlečemo, naj ima Dockerfile, v katerem je določeno katere datoteke se vključijo v naš build.)
4. Docker tag (Verzija ali ime imaga (v1, 150, prva-verzija, itd.)
5. Docker push (Upload v določen repozitorij. Login je potreben za to fazo.)

Agent Job naj bo linux, saj so v primeru Windows bile neke komplikacije.

### 'Release' faza
Nato skočimo v 'Releases' zavihek, kjer ustvarimo nov release in kot artifact določimo ta build. V proženju lahko izberemo, ali se release izvaja ročno ali avtomatsko po uspešno končanem buildu.
Tam z Command prompt taskom pokličemo .yaml datoteko, ki jo imamo že pripravljeno v GitHubu. To naredimo z *'kubectl apply -f (pot datoteke)'*'. 
Da bo naš image up to date nato uporabimo še ukaz *'kubectl set'*, v katerem popravimo image na $(Build.BuildId), katerega tudi uporabimo pri 'Docker tag' v tretjem koraku (glej gor). Taska sta torej:
1. *kubectl apply -f (ime)*
2. *kubectl set deployment (ime) --image (image-name)*

V našem .yaml filu moramo definirati vsaj deployment in service. Pri service pazimo, da je target port takšen, kot ga zahteva nek servis, ki ga uporabljamo v image (npr. 80), in določimo navaden port na poljubno število. Tip nastavimo na 'LoadBalancer'. 

Na Kubernetes dashboardu bi sedaj morali videti naš deployment in toliko podov, kolikor smo jih definirali. Servis bi moral biti z statusom 'pending' za kratek čas, preden se mu dodeli External IP in je aplikacija dosegljiva.

#### Kubernetes (kubectl) ukazi
Kubernetes nam ponuja dostop poleg dashboarda tudi v command promptu, kjer ima vedno pripono '**kubectl**'. 
- ##### Yaml
  Za poganjanje naših .yaml datotek, ki definirajo različne stvari v Kubernetesu uporabljamo:
  1. *kubectl create -f (datoteka)*
  2. *kubectl apply -f (datoteka)*

  'Create' uporabljamo le, kadar ne nameravamo storitve v prihodnosti nikoli spreminjati - če hočemo spremenljivo verzijo, ga vedno ustvarimo kar z 'apply'.
- ##### Ogled storitev
  Če si hočemo ogledati listo storitev katerega tipa ali pa le eno v podrobnosti, uporabimo:
  1. *kubectl get (deployments, services, pods, persistentVolumes, itd.) (ime_storitve(ni obvezno))*
  2. *kubectl describe (deployment, service, pod, itd.) (ime_storitve(ni obvezno))*

(work in progress)


