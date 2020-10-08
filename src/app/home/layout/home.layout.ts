import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DATA } from 'src/app/data/data';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home.layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../styles/home.page.scss'],
})
export class HomePageLayoutComponent {
  data = DATA;
  tempData = JSON.parse(JSON.stringify(DATA));

  maxCanSelect = 3;
  selected = 0;

  tempObj = {
    selectedSeat: 0,
    selectedCategory: null,
    isSeactSelected: false,
    totalPrice: 0,
  };

  handleClick(dt: any) {
    this.selectSeat(dt);
  }

  private getNumberOfSeatSelected() {
    return this.tempObj.selectedSeat;
  }

  private setNumberOfSeatSelected() {
    this.tempObj.selectedSeat++;
  }

  private selectSeat(dt: any) {
    const { CatIndex } = dt;

    // check if selected seatc count is maxCanSelect
    if (!this.tempObj.isSeactSelected) {
      if (this.getNumberOfSeatSelected() <= this.maxCanSelect) {
        if (this.checkCategoryMatch(CatIndex)) {
          if (this.checkForAvailableSeats(dt) >= 1) {
            this.selectSeats(dt);
          }
        } else {
          alert(
            'UnSelecting selected seat now you can select from ' +
              this.data[CatIndex].categoryType +
              ' category'
          );

          this.unSelectAll();
        }
      } else {
        alert('Can not selected more than ' + this.maxCanSelect + ' seats');
      }
    } else {
      this.unSelectAll();
      this.selectSeat(dt);
    }
  }

  private checkCategoryMatch(catIndex: number) {
    if (
      this.tempObj.selectedCategory !== 0 &&
      this.tempObj.selectedCategory === null
    ) {
      this.tempObj.selectedCategory = catIndex;
      return true;
    }

    const checkCat = catIndex === this.tempObj.selectedCategory;
    this.tempObj.selectedCategory = catIndex;
    return checkCat;
  }

  private checkForAvailableSeats(dt: any, dir = 'right'): number {
    const { CatIndex, listIndex, itemIndex } = dt;
    const seats = this.data[CatIndex].seats[listIndex].sectionSeats;

    let availableSeatCount = 0;

    for (let index = itemIndex; index < seats.length; index++) {
      if (!seats[index].selected) {
        availableSeatCount++;
      }
    }

    return availableSeatCount;
  }

  private selectSeats(dt) {
    const { CatIndex, listIndex, itemIndex } = dt;
    const seats = this.data[CatIndex].seats[listIndex].sectionSeats;

    for (let index = itemIndex; index < seats.length; index++) {
      // increment select seats
      if (this.getNumberOfSeatSelected() <= this.maxCanSelect) {
        if (this.getNumberOfSeatSelected() === this.maxCanSelect) {
        } else {
          this.setNumberOfSeatSelected();

          if (!seats[index].selected) {
            seats[index].selected = true;
          }
        }
      }
    }

    this.data[CatIndex].seats[listIndex].sectionSeats = seats;
    this.getTotalPrice();

    if (this.getNumberOfSeatSelected() === this.maxCanSelect) {
      this.tempObj.isSeactSelected = true;
    }
  }

  private unSelectAll() {
    this.data = JSON.parse(JSON.stringify(this.tempData));
    this.tempObj.isSeactSelected = false;
    this.tempObj.selectedSeat = 0;
    this.getTotalPrice();
  }

  private getTotalPrice() {
    this.tempObj.totalPrice =
      this.data[this.tempObj.selectedCategory].totalAmount *
      this.tempObj.selectedSeat;
  }
}
