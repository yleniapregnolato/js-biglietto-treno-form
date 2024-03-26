# BIGLIETTO TRENO FORM

## RACCOLTA DATI
- chiedere all'utente il numero di chilometri da percorrere
- chiedere all'utente l'età del passeggero

## ESECUZIONE LOGICA
Se età è number AND km è number il prezzo del biglietto verrà calcolato:

- prezzo base: km * 0.21
- applico lo sconto :
```
Se il passeggero ha meno di 18 anni
   lo sconto è del 20%
Se il passeggero ha più di 65
   lo sconto è del 40%
Altrimenti 
   lo sconto è 0

```
- calcolo il prezzo del biglietto applicando lo sconto:
```
prezzoScontato = prezzo - (prezzo * sconto / 100)

```
## OUTPUT
- creo in html un form per indicare nome del passeggero età e chilometri da percorrere
- inserisco la porzione di html in pagina per visualizzare il biglietto con il prezzo calcolato in base ai dati inseriti

altrimenti
i dati inseriti non sono validi
