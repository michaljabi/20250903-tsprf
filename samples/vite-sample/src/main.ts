import 'bootstrap/dist/css/bootstrap.css';
import { AppComponent } from "./app.component.ts";

document
    .querySelector<HTMLDivElement>('#app')!
    .append(new AppComponent())
