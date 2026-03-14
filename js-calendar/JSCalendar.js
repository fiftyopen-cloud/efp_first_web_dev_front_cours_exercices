
class JSCalendar extends HTMLElement {
    static get observedAttributes() {
        return ['date'];
    }

    addEventClick(selectedDate) {
        if (!(selectedDate instanceof Date) || Number.isNaN(selectedDate.getTime())) {
            return null;
        }

        const selectedDateIso = selectedDate.toISOString().slice(0, 10);
        this.selectedDate = selectedDateIso;

        const detail = {
            date: selectedDate,
            selectedDate: selectedDateIso
        };

        this.dispatchEvent(new CustomEvent('date-selected', {
            detail,
            bubbles: true,
            composed: true
        }));

        this.dispatchEvent(new Event('change', {
            bubbles: true,
            composed: true
        }));

        return detail;
    }  

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'date' && oldValue !== newValue && this.isConnected) {
            this.connectedCallback();
        }
    }
    
    connectedCallback() {
        const host = this;
        const shadow = this.shadowRoot;
        shadow.textContent = '';
        
        const TODAY = new Date();
        let table_month;
        let container = document.createElement('div');
        container.classList.add('calendar-container');
        let is_sunday_first_day = false;
        let name_days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
        let rest_days = ['Dim', 'Sam'];
        let current_date = get_date_from_attribute(this.getAttribute('date'));
        let current_month = current_date.getMonth();
        let month_names = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        let years = Array.from({length: 33}, (_, i) => current_date.getFullYear() - 14 + i);
        let max_col = name_days.length;
        let max_line = 6;

        print_calendar(current_month);
        
        function print_calendar(current_month) {
            const ordered_days = get_ordered_days(name_days, is_sunday_first_day);
            table_month = document.createElement('table');
            table_month.appendChild(print_month_name(month_names[current_month]));
            table_month.appendChild(print_days_name(ordered_days));
            
            print_table_month(find_first_day_month(current_month, is_sunday_first_day), 
                is_target_date(current_month, current_date.getDate()), rest_days, ordered_days);
        }

        //  Show the option panel to select month or year
        function show_option_panel(cell, items = [], panelType = 'month') {
            // Remove existing panel if any
            const existingPanel = cell.querySelector('.panel');
            if (existingPanel) existingPanel.remove();

            let panel = document.createElement('div');
            panel.classList.add('panel');
            let panel_content = document.createElement('div');
            panel_content.classList.add('panel-content');
            panel.appendChild(panel_content);
            let table_row;
            const itemsPerRow = 3;
                      
            items.forEach((item, index) => {
                if ((index) % itemsPerRow === 0) {
                    table_row = add_element('div', panel_content, '', '', '', null);
                }

                add_element('div', table_row, String(item), 'panel-option', 'click', () => {
                    const isYear = panelType === 'year';
                    if (isYear) {
                        host.setAttribute('date', `${item}-${String(current_month + 1).padStart(2, '0')}-01`);
                    } else {
                        const newMonth = items.indexOf(item);
                        host.setAttribute('date', `${TODAY.getFullYear()}-${String(newMonth + 1).padStart(2, '0')}-01`);
                    }
                    panel.remove();
                });    

            });

            container.appendChild(panel);
        }

        function get_ordered_days(days, first_day_sunday = false) {
            if (first_day_sunday) return [...days];
            return [...days.slice(1), days[0]];
        }  
        
        function print_month_name(month_name) {
            let panel = ""
            let month_header = document.createElement('tr');
            let month_name_cell = document.createElement('th');

            panel = () => show_option_panel(shadow, month_names, 'month');
            add_element('span', month_name_cell, month_name, '', 'click', panel);

            add_element('span', month_name_cell, " - ");

            panel = () => show_option_panel(shadow, years, 'year');
            add_element('span', month_name_cell, current_date.getFullYear(), '', 'click', panel);       
           
            month_name_cell.id = "month_name";
            month_name_cell.colSpan = max_col;
            month_header.appendChild(month_name_cell);
            return month_header;
        }

        function add_element(element, parent, text = '', class_name = '', action = "click", listener = null) {
            let new_element = document.createElement(element);
            if (text) new_element.textContent = text;
            if (class_name) new_element.classList.add(class_name);
            if (listener) new_element.addEventListener(action, listener);
            parent.appendChild(new_element);
            return new_element;
        }

        function print_days_name(name_days) {
            let table_raw = document.createElement('tr');
            for(let i = 0; i < name_days.length; i++) {
                add_element('th', table_raw, name_days[i], 'day_name');
            }
            return table_raw;
        }

        function is_rest_days(day, ...days) {
            return days.includes(day) ? true : false;
        }

        function find_first_day_month(month_index, is_sunday_first_day = false) {
            let day = new Date(current_date.getFullYear(), month_index, 1).getDay();
            if(!is_sunday_first_day) day = (day + 6) % 7;

            return day;
        }

        function is_target_date() {
            return current_month === TODAY.getMonth() &&
                   current_date.getFullYear() === TODAY.getFullYear();
        }

        function get_date_from_attribute(date_attribute_value) {
            if (!date_attribute_value) return new Date();

            const date_parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date_attribute_value.trim());
            if (!date_parts) return new Date();

            const year = Number(date_parts[1]);
            const month = Number(date_parts[2]);
            const day = Number(date_parts[3]);
            const parsed_date = new Date(year, month - 1, day);

            if (
                parsed_date.getFullYear() !== year ||
                parsed_date.getMonth() !== month - 1 ||
                parsed_date.getDate() !== day
            ) {
                return new Date();
            }

            return parsed_date;
        }

        function print_table_month(first_day_of_week, is_today = false, rest_days = [], ordered_days = name_days){
            let col = 0; 
            let line = 0;
            let table_row;
            const first_visible_date = new Date(current_date.getFullYear(), current_month, 1 - first_day_of_week);

            while (line < max_line) {

                table_row = add_element('tr', table_month);
                while (col < max_col) {
                    const offset = (line * max_col) + col;
                    const cell_date = new Date(first_visible_date.getFullYear(), first_visible_date.getMonth(), first_visible_date.getDate() + offset);
                    const is_current_month = cell_date.getFullYear() === current_date.getFullYear() && cell_date.getMonth() === current_month;
                    
                    let table_data = add_element('td', table_row, '', '', 'click', () => {
                        const selectedDate = new Date(table_data.dataset.date);
                        host.addEventClick(selectedDate);

                        if (!table_data.classList.contains('day')) {
                            host.setAttribute('date', table_data.dataset.date);
                        }
                    });
                                        
                    if (is_rest_days(ordered_days[col], ...rest_days)) {
                        table_data.classList.add('rest_day');
                    }

                    table_data.textContent = cell_date.getDate();
                    table_data.dataset.date = cell_date.toISOString().slice(0, 10);

                    if (is_current_month) {
                        table_data.classList.add('day');

                        if (
                            is_today &&
                            cell_date.getDate() === TODAY.getDate()
                        ) {
                            table_data.classList.add('today');
                        }
                    } else {
                        if (cell_date < new Date(current_date.getFullYear(), current_month, 1)) {
                            table_data.classList.add('previous_month');
                        } else {
                            table_data.classList.add('next_month');
                        }
                    }

                    ++col;
                }
                
                ++line;
                col = 0;
            }
        }
     
        const style = document.createElement('style');
        style.textContent = `
            :host {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: .8rem;
                font-weight: normal;
                --head-text-color: #808080;
                --head-background-color: #7fffd4;
                --day-text-color: #008080;
                --day-background-color: #7fffd4;
                --rest-day-background-color: #90ee90;
                --current-day-border-color: #ff6347;
                --current-day-text-color: #ff6347;
                --outside-day-text-color: #55bcbc;
                --outside-day-background-color: #a9f5dc;
                --shadow: -1px -1px 5px rgba(0, 0, 0, 0.5) inset, 1px 1px 5px rgba(0, 0, 0, 0.3);
            }
    
            * {
                user-select: none;
                box-sizing: border-box;
            }

            .calendar-container {
                position: relative;
                width: 100%;
            }

            table {
                background-color: transparent;
                border-collapse: separate;
                border-spacing: 5px;
                width: 100%;
            }

            td, th {
                padding: 10px;
                border-radius: 5px;
                text-align: center;
                box-shadow: var(--shadow);
            }
    
            td {
                background-color: var(--day-background-color);
                color: var(--day-text-color);
                transition: all 0.7s;}
    
            td:hover {
                background-color: var(--day-background-color);
                color: var(--day-text-color);
                filter: brightness(90%);
                cursor: pointer;}
                            
            th {
                background-color: var(--head-background-color);
                color: var(--head-text-color);
            }
    
            .today {
                color: var(--current-day-text-color);
                border: 1px solid var(--current-day-border-color);
            }
    
            .rest_day {
                background-color: var(--rest-day-background-color);
            }
            
            .next_month, .previous_month {
                filter: grayscale(40%);
                color: gray;
            }

            .panel {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.6);
                z-index: 1000;
                display: flex;
                align-items: space-around;
                justify-content: center;
                border-radius: 5px;
                padding: 20px;
            }

            .panel div {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                gap: 10px;
                justify-content: center;    
            }

            div.panel-option { 
                color: #ffffff;
                cursor: pointer;
                background-color: rgba(127, 255, 212, 0.2);
                border: 1px solid #7fffd4;
                border-radius: 5px;
                min-width: 80px;
                text-align: center;
                align-items: center;
                transition: all 0.2s;
            }

            div.panel-option:hover {
                background-color: rgba(127, 255, 212, 0.4);
                transform: scale(1.05);
            }

            

        `;

        shadow.appendChild(style);
        container.appendChild(table_month);
        shadow.appendChild(container);
    }

}

// Define the new element
customElements.define("js-calendar", JSCalendar);