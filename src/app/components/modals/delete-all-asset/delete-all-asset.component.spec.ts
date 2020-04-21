import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllAssetComponent } from './delete-all-asset.component';

describe('DeleteAllAssetComponent', () => {
  let component: DeleteAllAssetComponent;
  let fixture: ComponentFixture<DeleteAllAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAllAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAllAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
