import {of, from,
    Observable,
    observable,
    fromEvent,
map,range,timer,interval
} from 'rxjs'

/*
const stream$ =
    of(1,2,3,4)//of створює стрім

stream$.subscribe(val=>{
    console.log('value',val)
})*/

/*const arr$   = from ([1,2,3,4]).pipe(
    scan((prev,v)=>prev.concat(v),[])
)

arr$.subscribe(val=>{
    console.log(val)
})*/


const stream$ = new Observable(observable=>{
    console.log('begin')
    setTimeout(()=>{observable.next('first value')},1000)


    setTimeout(()=>{observable.complete()},1100)

    setTimeout(()=>{observable.error('some vent wrong')},1200)

    setTimeout(()=>{observable.next('first value')},2002)

})

/*stream$.subscribe(
    val=>console.log("Val: ",val),
    (err)=>console.log(e),
    ()=>console.log('complete')

)*/

/*
stream$.subscribe({
    next(value){
        console.log(val)
    },
    error(e){
        console.log(e)
    },
    complete(){
        console.log('complete')
    }
})*/


/*
// fromEvent стрім з події
fromEvent( document.querySelector('canvas'),'mousemove')
    .pipe(
        map(e=>({
            x:e.offsetX,
            y:e.offsetY,
            ctx:e.target.getContext('2d')
        }))
    )
    .subscribe(pos=>{
        console.log(event)
        pos.ctx.fillRect(pos.x,pos.y, 2,2)
    })

const clear$ = fromEvent(document.getElementById('clear'),'click')
clear$.subscribe(()=>{
    const canvas = document.querySelector('canvas')
    canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height)
})*/




// const  subscription = interval(500).subscribe(e=>console.log(e))

// setTimeout(()=>{
//     subscription.unsubscribe()
// },3000)

// timer(250 ).subscribe(v=>console.log(v))

// range(2,10).subscribe(v=>console.log(v))

 