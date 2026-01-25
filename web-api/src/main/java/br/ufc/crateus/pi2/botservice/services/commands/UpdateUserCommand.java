package br.ufc.crateus.pi2.botservice.services.commands;

import br.ufc.crateus.pi2.botservice.models.enums.EUserType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UpdateUserCommand 
{
    private String name;

    private String email;

    private EUserType type;
}
