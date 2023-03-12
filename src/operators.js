


import {interval,fromEvent} from 'rxjs'
import {map,
    filter,
    tap,
    take,
    takeLast,
    takeWhile,
    scan,
    reduce,
    switchMap

} from 'rxjs/operators'

fromEvent(  document,'click')
    .pipe(switchMap(e=>{
        return  interval(100)
            .pipe(
                take(5),
                reduce((prev,v)=>prev+v,0)
            )
    }))
    .subscribe({
            next:v=>console.log('next :', v),
            complete:v=>console.log('complete :',v)
    })


const stream$ = interval(222)
    .pipe(
        tap(v=>console.error(v)),//for side effect not transforming data
        // map((v)=>v**2),
        // filter(v=>v % 2 ===0),
        // take(5)// end after 5 iteration

        // take(10),
        // takeLast(5)// end after 5 iteration

        // takeWhile(e=>e<20)

        // scan ((prev,c)=>prev+c) //scan same as reduce for every
        take(1),
        reduce((prev,cur)=>prev+cur)//reduce працює з завершеним стрімом це різниця від scan
    )//transforming data

stream$.subscribe({
    next(v){
        console.log('next: ', v)
    },
    complete(){
        console.log('complete')
    }
})


