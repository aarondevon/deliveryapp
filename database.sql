create table account (
    account_id bigserial,
    account_user_name varchar not null,
    account_user_email varchar not null,
    account_user_password varchar not null,
constraint account_pk primary key (account_id)
);

create table shift (
    shift_id bigserial,
    shift_date date not null,
    shift_start_time time not null,
    shift_end_time time not null,
    shift_begin_odometer numeric (7, 1) not null,
    shift_end_odometer numeric (7, 1) not null,
    shift_miles numeric (7, 1) not null,
    shift_mile_reimbursement numeric (4, 2) not null,
    shift_mile_income numeric (6, 2) not null,
    shift_user_id bigint not null,
constraint shift_pk primary key (shift_id),
constraint shift_fk foreign key (shift_user_id) references account (account_id)
);

create table orders (
    orders_id bigserial,
    orders_date date not null,
    orders_billed numeric (6, 2) not null,
    orders_received numeric (6, 2) not null,
    orders_tip numeric (6, 2) not null,
    orders_user_id bigint not null,
    orders_shift_id bigint not null,
constraint orders_pk primary key (orders_id),
constraint orders_fk1 foreign key (orders_user_id) references account (account_id),
constraint orders_fk2 foreign key (orders_shift_id) references shift (shift_id)
);

create table payment (
    payment_id bigserial,
    payment_type varchar not null,
    payment_tip_type varchar not null,
    payment_order_id bigint not null,
constraint payment_pk primary key (payment_id),
constraint payment_fk foreign key (payment_order_id) references orders (orders_id)
);