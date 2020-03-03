var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
    Given('I go to losestudiantes home screen', ()=> {
        browser.url('/');
        if(browser.isVisible('button=Cerrar')){
            browser.element('button=Cerrar').click();
        }else{
            if(browser.isVisible('#cuenta')){
                browser.element('#cuenta').click();
                browser.element('.dropdown-menu').click();
            }
        }
    });

    When('I open the login screen', ()=>{
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');
    });

    When(/^I fill with (.*) and (.*)$/ , (email, password)=>{
        var cajaLogIn = browser.element('.cajaLogIn');

        var mailInput = cajaLogIn.element('input[name="correo');
        mailInput.click();
        mailInput.keys(email);

        var passwordInput= cajaLogIn.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys(password);
    });

    When(/^I register with (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*) and (.*)$/, (firstname, lastname, email, university, ismaestria, programa, dobleprogram, program2, acept, password) => {
        var cajaSignUp = browser.element('.cajaSignUp');

        var nameInput = cajaSignUp.element('input[name="nombre"]');
        nameInput.click();
        nameInput.keys(firstname);

        var lastNameInput = cajaSignUp.element('input[name="apellido"]');
        lastNameInput.click();
        lastNameInput.keys(lastname);

        var emailInput = cajaSignUp.element('input[name="correo"]');
        emailInput.click();
        emailInput.keys(email);

        browser.waitForVisible('select[name="idUniversidad"]', 5000);
        var selectUniversidad =  cajaSignUp.element('select[name="idUniversidad"]');
        selectUniversidad.selectByValue(university);

        if(ismaestria =="S"){
            browser.element('/html/body/div[3]/div[2]/div/div/div/div/div/div[1]/div/form/div/label/input').click();
        }


        if(university!="inicial"){
            browser.waitForVisible('select[name="idPrograma"]', 8000);
            var selectPrograma = cajaSignUp.element('select[name="idPrograma"]');
            selectPrograma.selectByValue(programa);
        }

        var passwordInput = cajaSignUp.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys(password);

        if(dobleprogram=="S"){
            browser.element('/html/body/div[3]/div[2]/div/div/div/div/div/div[1]/div/form/div/label[2]/input').click();

            browser.waitForVisible('select[name="idPrograma2"]', 8000);
            var selectDoblePrograma = cajaSignUp.element('select[name="idPrograma2"]');
            selectDoblePrograma.selectByValue(program2);
        }

        if(acept == "S"){
            cajaSignUp.element('input[name="acepta"]').click();
        }
    });

    When('I try to login', ()=>{
        var cajaLogIn = browser.element('.cajaLogIn');
        cajaLogIn.element('button=Ingresar').click();
    });

    When('I try to register', ()=>{
        var cajaLogIn = browser.element('.cajaSignUp');
        cajaLogIn.element('button=Registrarse').click();
    });

    Then('I expect to not be able to login', ()=>{
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    });

    Then('I expect to see {string}', error => {
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);
        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).to.include(error);
    });

    Then(/^I expect fail (.*)$/, (error) => {
        var cajaSignUp = browser.element('.cajaSignUp');
        var nameInput = cajaSignUp.element('input[name="nombre"]');
        var lastNameInput = cajaSignUp.element('input[name="apellido"]');
        var selectUniversidad =  cajaSignUp.element('select[name="idUniversidad"]');

        if(browser.isVisible('.aviso.alert.alert-danger')){
            var alertText = browser.element('.aviso.alert.alert-danger').getText();
            expect(alertText).to.include(error);
        }else{
            if(nameInput.getValue() == ""){
                expect(nameInput.getValue()).to.include(error);
            }
            else if(lastNameInput.getValue() == ""){
                expect(lastNameInput.getValue()).to.include(error);
            }
            else if(selectUniversidad.getValue() == "inicial"){
                expect(selectUniversidad.getValue()).to.include(error);
            }
            else{
                var selectPrograma = cajaSignUp.element('select[name="idPrograma"]');
                if(selectPrograma.getValue() == "inicial"){
                    expect(selectPrograma.getValue()).to.include(error);
                }
            }
        }


    });

    Then('I expect successful register', ()=>{
        browser.waitForVisible('h2', 5000);
        var successfulText = browser.element('h2').getText();
        expect(successfulText).to.equals('Registro exitoso!');
    })

    Then('I expect into the website', ()=>{
        browser.pause(5000);
        browser.waitForVisible('#cuenta', 5000);
        browser.element('#cuenta').click();
        var salirText = browser.element('.dropdown-menu').getText();
        expect(salirText).to.include('Salir');
    });
});