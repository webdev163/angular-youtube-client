import { Observable, take } from 'rxjs';

export function takeOne<T>(o: Observable<T>): T {
  let val!: T;
  o.pipe(take(1)).subscribe((v) => {
    val = v;
  });
  return val;
}
