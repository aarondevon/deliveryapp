create table account (
    user_id varchar,
    user_name varchar not null,
    user_email varchar not null,
    user_password varchar not null,
constraint account_pk primary key (user_id)
);

create table shift (
    shift_id varchar,
    line_id smallserial not null,
    shift_date date not null,
    start_time time not null,
    end_time time not null,
    begin_odometer number (7, 1) not null,
    end_odometer number (7, 1) not null,
    miles number (7, 1) not null,
    mile_reimbursement number (4, 2) not null,
    mile_income number (6, 2) not null,
    user_id varchar not null,
constraint shift_pk primary key (shift_id),
constraint shift_fk foreign key (user_id) references account (user_id)
);

create table orders (
    order_id varchar,
    line_id smallserial not null,
    order_date date not null,
    billed number (6, 2) not null,
    received number (6, 2) not null,
    tip number (6, 2) not null,
    user_id varchar not null,
    shift_id varchar not null,
constraint orders_pk primary key (order_id),
constraint orders_fk1 foreign key (user_id) references account (user_id),
constraint orders_fk2 foreign key (shift_id) references shift (shift_id),
);

create table payment (
    payment_id varchar,
    line_id smallserial not null,
    payment_type varchar not null,
    tip_type varchar not null,
    order_id varchar not null,
constraint payment_pk primary key (payment_id),
constraint payment_fk foreign key (order_id) references orders (order_id)
);