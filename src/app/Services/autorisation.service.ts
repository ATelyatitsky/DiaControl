import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AutorisationService {

    constructor(private router: Router) {
    }

    public redirectTo(path: string): void {
        this.router.navigate([
            path,
        ]);
    }
}