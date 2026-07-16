# Bank Microservices — Account & Loan

This repository contains two independent Spring Boot microservices for a bank:

1. **account** — exposes account details
2. **loan** — exposes loan account details

Each is a **separate Maven project** with its own `pom.xml`, so they can be built, run,
and deployed independently — this is the core idea behind microservices architecture
(as opposed to one monolithic app that serves both accounts and loans).

Both services are intentionally simple: they return **hardcoded dummy JSON responses**
with no database or backend connectivity, so the focus stays on the mechanics of
building/running independent Spring Boot REST services.

---

## Project structure

```
microservices/
├── account/                 # Account microservice (port 8080)
│   ├── pom.xml
│   └── src/
│       ├── main/java/com/cognizant/account/
│       │   ├── AccountApplication.java
│       │   ├── controller/AccountController.java
│       │   └── model/Account.java
│       ├── main/resources/application.properties
│       └── test/java/com/cognizant/account/AccountApplicationTests.java
│
├── loan/                    # Loan microservice (port 8081)
│   ├── pom.xml
│   └── src/
│       ├── main/java/com/cognizant/loan/
│       │   ├── LoanApplication.java
│       │   ├── controller/LoanController.java
│       │   └── model/Loan.java
│       ├── main/resources/application.properties
│       └── test/java/com/cognizant/loan/LoanApplicationTests.java
│
└── README.md
```

---

## Prerequisites

- JDK 17+
- Maven 3.6+ (or use the Maven wrapper if you add one via Spring Initializr)
- Eclipse IDE (or any IDE with Spring/Maven support)
- Internet access (only needed once, to download dependencies from Maven Central)

---

## How this project was created (Spring Initializr steps)

If you want to regenerate these projects from scratch instead of using the files here:

### Account microservice

1. Create a folder with your employee ID on `D:` drive, e.g. `D:\E1234`
2. Inside it, create a folder named `microservices`
3. Open [https://start.spring.io/](https://start.spring.io/)
4. Fill in:
   - **Group**: `com.cognizant`
   - **Artifact**: `account`
5. Add dependencies:
   - Developer Tools → **Spring Boot DevTools**
   - Web → **Spring Web**
6. Click **Generate** to download `account.zip`
7. Extract the `account` folder and place it inside `D:\E1234\microservices`
8. Open a command prompt in the `account` folder and run:
   ```
   mvn clean package
   ```
9. Import the project into Eclipse: `File → Import → Existing Maven Projects`

### Loan microservice

Repeat the same steps with:
- **Group**: `com.cognizant`
- **Artifact**: `loan`
- Same dependencies (DevTools + Spring Web)

Extract into the same `microservices` folder, next to `account`.

> The files in **this repo** are the finished result of following the steps above,
> plus the controller code described below — so you can skip Initializr entirely
> and just clone/download this repo.

---

## API Specification

### Account Service

| Method | Endpoint            | Description                     |
|--------|----------------------|----------------------------------|
| GET    | `/accounts/{number}` | Get account details by number   |

**Sample request:**
```
GET http://localhost:8080/accounts/00987987973432
```

**Sample response:**
```json
{
  "number": "00987987973432",
  "type": "savings",
  "balance": 234343
}
```

### Loan Service

| Method | Endpoint         | Description                  |
|--------|------------------|-------------------------------|
| GET    | `/loans/{number}` | Get loan account details by number |

**Sample request:**
```
GET http://localhost:8081/loans/H00987987972342
```

**Sample response:**
```json
{
  "number": "H00987987972342",
  "type": "car",
  "loan": 400000,
  "emi": 3258,
  "tenure": 18
}
```

---

## Running the services

Each service can be built and run independently.

### 1. Build

```bash
cd account
mvn clean package

cd ../loan
mvn clean package
```

### 2. Run

In two separate terminals (or two Eclipse console instances):

```bash
# Terminal 1 — Account service (runs on default port 8080)
cd account
mvn spring-boot:run
```

```bash
# Terminal 2 — Loan service (runs on port 8081)
cd loan
mvn spring-boot:run
```

Or, run each app's main class (`AccountApplication.java` / `LoanApplication.java`)
directly from Eclipse using **Run As → Spring Boot App** / **Java Application**.

### 3. Why the loan service needs a different port

Both projects are generated with Spring Boot's **default port 8080**. If you start the
account service first (using port 8080) and then try to start the loan service without
any changes, it will fail with:

```
***************************
APPLICATION FAILED TO START
***************************

Description:
Web server failed to start. Port 8080 was already in use.
```

This happens because only one process can bind to a given port on a machine at a time.
To fix this, `loan/src/main/resources/application.properties` sets:

```properties
server.port=8081
```

This lets both services run simultaneously, side by side:

- Account service → `http://localhost:8080`
- Loan service → `http://localhost:8081`

> **Tip (Eclipse):** When both apps are running, the Console view will show both
> service consoles. Use the small monitor/display icon in the top-right of the
> Console view to switch between them.

---

## Testing the services

Once both are running, open a browser (or use `curl` / Postman):

```
http://localhost:8080/accounts/00987987973432
http://localhost:8081/loans/H00987987972342
```

You should see the dummy JSON responses shown above.

---

## Key microservices concept demonstrated

- Each business capability (accounts, loans) is built, packaged, and deployed as its
  **own independent application** with its own `pom.xml`, its own lifecycle, and its
  own port — instead of bundling everything into a single monolithic app.
- Services can be developed, built, and scaled independently of one another.
