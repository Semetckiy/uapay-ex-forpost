import {Directive, EventEmitter, Input, Output} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {FormGroupDirective} from "@angular/forms";
import {debounceTime, take} from "rxjs/internal/operators";
import {getFormState, State} from "../../reducers";
import {Subscription} from "rxjs/index";
import {UpdateFields} from "../../actions/form.actions";

@Directive({
  selector: '[connectSearchForm]'
})
export class ConnectFormDirective {

  @Input() debounce : number = 300;
  formChange : Subscription;

  constructor(
    private formGroupDirective: FormGroupDirective,
    private store: Store<State>
  ) { }

  ngOnInit() {
    // Update the form value based on the state
    this.store.pipe(
      select(getFormState),
      take(1)
    ).subscribe(formValue => {
      this.formGroupDirective.form.patchValue(formValue.fields);
    });

    this.formChange = this.formGroupDirective.form.valueChanges
      .pipe(debounceTime(this.debounce))
      .subscribe(value => {
        this.store.dispatch(new UpdateFields({fields: value}));
      });
  }

  ngOnDestroy() {
    this.formChange.unsubscribe();
  }
}
