import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

    @Input() parentId: string;
    menuList: any;
    showSubmenu = false;

    constructor(
        private service: DataService
    ) { }

    ngOnInit(): void {
        this.service.getMenuList(this.parentId).subscribe(
            (data) => {
                this.menuList = data.map(
                    i => ({ ...i, showSubmenu: false })
                );
            }
        );
    }

    openSubmenu(menuId): void {
        this.menuList.forEach(i => {
            if (i.id === menuId) {
                i.showSubmenu = true;
            } else {
                i.showSubmenu = false;
            }
        });
    }

}
